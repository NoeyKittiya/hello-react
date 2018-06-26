import React, { Component } from "react";
import "./home.css";
import { Animated } from "react-animated-css";
import firebase from "firebase";
import Chat from './Chat';

class home extends Component {
  constructor(props) {
    super(props);


    this.state = {
      sumA: 0,
      name: [],
      val: [],
      post: []
    };


    this.isLoad = this.isLoad.bind(this)

  }

  isLoad(){
    var config = {
      apiKey: "AIzaSyCPZtFdctQrB-SyR0sFfYWBW3CTpiqbDi4",
      authDomain: "finapp-1c327.firebaseapp.com",
      databaseURL: "https://finapp-1c327.firebaseio.com",
      projectId: "finapp-1c327",
      storageBucket: "finapp-1c327.appspot.com",
      messagingSenderId: "72060197826"
    };

   
      let user = this.props.name;
      if (!firebase.apps.length) {
        this.app = firebase.initializeApp(config);
        console.log('open at home')
    }else{
        this.app = firebase.app();
        
        
         }
      this.db = this.app.database().ref(user);

      this.db.on("value", snap => {

        snap.forEach(element => {
          this.setState({
            name: element.key,
           

          })
          let keyN = element.key
          this.db2 = this.app.database().ref(user+"/"+ keyN);
          this.db2.on("value", snap2 => {
           
            snap2.forEach(element2 => {
            this.setState({
              val: this.state.val.concat(element2.val().num)
            })
           
            })

          })
         
         


          const postList = [
            <Animated
              animationIn="bounceInUp"
              animationOut="fadeOut"
              isVisible={true}
            >
              <section class="section">
                <div class="container">
                  <div>
                    <h1 class="title">คุณลูกหนี้ -> {this.state.name}</h1>
                    <h2 class="subtitle">
                      {

                        this.state.val.map((item, i) => {
                          let num = Number.parseInt(item);
                          this.setState({
                            sumA: this.state.sumA +num,
                            val:  []
                          })

                          return item+" "
                          
                        })

                      }
                      <p>Total {this.state.sumA}</p>
                      {this.setState({ sumA: 0 })}
                    </h2>

                  </div>
                </div>
              </section>

            </Animated>
          ]

          this.setState({
            post: this.state.post.concat(postList)
          });

        });
        let app = firebase.app();
        app.delete(app);
      });



      
  }

  componentDidMount(){
    this.isLoad();
   
  }
 


  render() {

    return (
      <Animated
        animationIn="bounceInUp"
        animationOut="fadeOut"
        isVisible={true}
      >

        <div className="tile ">
          <section class="hero is-primary is-rounded">
            <div class="hero-body ">
              <div class="container">
                <div className="head ">
                  <h1 class="title ">สวัสดีคุณ {this.props.name}</h1>
                  <h2 class="subtitle">#ขอให้ทวงหนี้แล้วได้คืนนะคะ</h2>
                </div>
                <div id="data">
                  <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true} >
                    {
                      this.state.post.map(function (item, i) {

                        return <div>{item}</div>
                      })
                    }
                  </Animated>
                </div>


              </div>
            </div>
          </section>




        </div>
      </Animated>
    );
  }
}

export default home;
