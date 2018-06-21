import React, { Component } from "react";
import "./home.css";
import { Animated } from "react-animated-css";
import firebase from "firebase";


class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      Bn: "",
      Nn: "",
      Mn: "",
      An: "",
      bank: [],
      noey: [],
      art: [],
      mon: [],
      sumB: "ยังไม่เสร็จโว้ยยย",
      sumM: "ยังไม่เสร็จโว้ยยย",
      sumN: "ยังไม่เสร็จโว้ยยย",
      sumA: "ยังไม่เสร็จโว้ยยย"
    };
    var config = {
      apiKey: "AIzaSyCPZtFdctQrB-SyR0sFfYWBW3CTpiqbDi4",
      authDomain: "finapp-1c327.firebaseapp.com",
      databaseURL: "https://finapp-1c327.firebaseio.com",
      projectId: "finapp-1c327",
      storageBucket: "finapp-1c327.appspot.com",
      messagingSenderId: "72060197826"
    };

    if (!firebase.apps.length) {
      let user = this.props.name;
      this.app = firebase.initializeApp(config);
      this.db = this.app.database().ref(user);
      this.db.on("value", snap => {
        this.setState({
          bank: this.state.bank.concat(snap.val().bank),
          noey: this.state.noey.concat(snap.val().noey),
          art: this.state.art.concat(snap.val().art),
          mon: this.state.mon.concat(snap.val().mon),
          Bn: snap.child(user + "/bank").key,
          Mn: snap.child(user + "/mon").key,
          Nn: snap.child(user + "/noey").key,
          An: snap.child(user + "/art").key
        });
        console.log(this.state.sum);

        let app = firebase.app();
        app.delete(app);
      });
    }
  }

  render() {
    return (
      <Animated
        animationIn="bounceInUp"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="tile">
          <section class="hero is-primary">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">สวัสดีคุณ {this.props.name}</h1>
                <h2 class="subtitle">#ขอให้ทวงหนี้แล้วได้คืนนะคะ</h2>

                <div id="data">
                <Animated
        animationIn="bounceInUp"
        animationOut="fadeOut"
        isVisible={true}
      >
                  {this.state.Bn === this.props.name ? (
                    ""
                  ) : (
                    
                      <section class="section">
                        <div class="container">
                          <div>
                               
                  <h1 class="title">คุณลูกหนี้ -> {this.state.Bn}</h1>
                            <h2 class="subtitle">
                              {this.state.bank.map((index, val) => {
                                 return <p key={val}>{index}</p>;
                              })}
                              <p>Total {this.state.sumB}</p>
                            </h2>
                            
                          </div>
                        </div>
                      </section>
                   
                  )}


                  {this.state.Mn === this.props.name ? (
                    ""
                  ) : (
                    
                      <section class="section">
                        <div class="container">
                          <div>
                            <h1 class="title">คุณลูกหนี้ -> {this.state.Mn}</h1>
                            <h2 class="subtitle">
                              {this.state.mon.map(function(index, val) {
                                 return <p key={val}>{index}</p>;
                              })}
                              <p>Total {this.state.sumM}</p>
                            </h2>
                          </div>
                        </div>
                      </section>
                   
                  )}



                  {this.state.Nn === this.props.name ? (
                          ""
                        ) : (
                
                    <section class="section">
                      <div class="container">
                         
                          <div>
                            <h1 class="title">คุณลูกหนี้ -> {this.state.Nn}</h1>
                            <h2 class="subtitle">
                              {this.state.noey.map(function(index, val) {
                                return <p key={val}>{index}</p>;
                              })}
                              <p>Total {this.state.sumN}</p>
                            </h2>
                          </div>
                       
                      </div>
                    </section>
                  
                    )}

                      {this.state.An === this.props.name ? (
                          ""
                        ) : (
                 
                    <section class="section">
                      <div class="container">
                      
                          <div>
                            <h1 class="title">คุณลูกหนี้ -> {this.state.An}</h1>
                            <h2 class="subtitle">
                              {this.state.art.map(function(index, val) {
                                return <p key={val}>{index}</p>;
                              })}
                              <p>Total {this.state.sumA}</p>
                            </h2>
                          </div>
                       
                      </div>
                    </section>
                  
                   )}

                   </Animated>
                </div>

                

                {/* {this.state.Mn === this.props.name ? 
                                     " "
                                     : <h3 class="subtitle is-4 is-pulled-left">
                                     <h2 class="title is-3 is-pulled-left">{this.state.Mn}</h2>
                                     {
                                        this.state.mon.map(function(index,val){return <li key={val} >{index}</li>})   
                                     }
                                     </h3>
                                     } */}

                {/* {this.state.An === this.props.name ? 
                                     " "
                                     : <h3 class="subtitle is-4 is-pulled-left">
                                     <h2 class="title is-3 is-pulled-left">{this.state.An}</h2>
                                     {
                                        this.state.art.map(function(index,val){return <li key={val} >{index}</li>})   
                                     }
                                     </h3>
                                     } */}

                {/* {this.state.Nn === this.props.name ? 
                                     " "
                                     : <h3 class="subtitle is-4 is-pulled-left">
                                     <h2 class="title is-3 is-pulled-left">{this.state.Nn}</h2>
                                     {
                                        this.state.noey.map(function(index,val){return <li key={val} >{index}</li>})   
                                     }
                                     </h3>
                                     } */}
              </div>
            </div>
          </section>
        </div>
      </Animated>
    );
  }
}

export default home;
