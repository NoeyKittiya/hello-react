import React, { Component } from "react";
import "./home.css";
import { Animated } from "react-animated-css";
import firebase from "firebase";


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

  isLoad() {

    let user = this.props.name;
    if (!firebase.apps.length) {
      var config = {
        apiKey: "AIzaSyCPZtFdctQrB-SyR0sFfYWBW3CTpiqbDi4",
        authDomain: "finapp-1c327.firebaseapp.com",
        databaseURL: "https://finapp-1c327.firebaseio.com",
        projectId: "finapp-1c327",
        storageBucket: "finapp-1c327.appspot.com",
        messagingSenderId: "72060197826"
      };
      this.app = firebase.initializeApp(config);
      console.log('open at home')
    } else {
      this.app = firebase.app();
    }


    this.db = this.app.database().ref(user);

    this.db.on("value", snap => {

      snap.forEach(element => {
        this.setState({
          name: element.key,


        })
        let keyN = element.key
        this.db2 = this.app.database().ref(user + "/" + keyN);
        this.db2.on("value", snap2 => {

          snap2.forEach(element2 => {
            this.setState({
              val: this.state.val.concat(element2.val().num)
            })

          })

        })




        const postList = [




          <div class="tile is-parent" style={{ width: '100%' }}>
            <Animated
              animationIn="bounceInUp"
              animationOut="fadeOut"
              isVisible={true}>
              <article class="tile is-child box notification is-warning ">
                <h3 class="title ">{this.state.name}</h3>
                <h5 class="subtitle is-5 has-text-link">
                  {

                    this.state.val.map((item, i) => {
                      let num = parseInt(item, Number)
                      this.setState({
                        sumA: this.state.sumA + num,
                        val: []
                      })

                      return item + " "

                    })

                  }
                  <p class="has-text-grey-darker">Total {this.state.sumA}</p>
                  {this.setState({ sumA: 0 })}
                </h5>
              </article>
            </Animated>

          </div>




        ]

        this.setState({
          post: this.state.post.concat(postList)
        });

      });
      let app = firebase.app();
      app.delete(app);
    });




  }

  componentDidMount() {
    this.isLoad();

  }



  render() {

    return (
      <div className="all">
        <Animated
          animationIn="fadeInDown"
          animationOut="slideInDown"
          isVisible={true}>
          <div class="hero-body ">
            <div class="container is-fullhd">
              <div className="head">
                <h1 class="title ">สวัสดีคุณ {this.props.name}</h1>
                <h2 class="subtitle">#ขอให้ทวงหนี้แล้วได้คืนนะคะ</h2>
              </div>
            </div>
          </div>
        </Animated>

        <div class="tile is-ancestor is-pulled-left">
          {
            this.state.post.map(function (item, i) {

              return <div>{item}</div>

            })
          }

        </div>








      </div>

    );
  }
}

export default home;
