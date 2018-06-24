import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./home";
import Auth from "./Auth";
import "./App.css";
import { Animated } from "react-animated-css";
import Chat from './Chat';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: false,
      name: "",
      pass: "",
      show: false
    };
    this.isLogin = this.isLogin.bind(this);
    this.isLogout = this.isLogout.bind(this);
  }

  isLogin() {
    if ((this.state.name === "art") & (this.state.name === this.state.pass)) {
      this.setState({
        user: true
      });
    } else if (
      (this.state.name === "mon") &
      (this.state.name === this.state.pass)
    ) {
      this.setState({
        user: true
      });
    } else if (
      (this.state.name === "bank") &
      (this.state.name === this.state.pass)
    ) {
      this.setState({
        user: true
      });
    } else if (
      (this.state.name === "noey") &
      (this.state.name === this.state.pass)
    ) {
      this.setState({
        user: true
      });
    } else {
      this.setState({
        show: true
      });
    }
  }
  isLoginKey(e) {
    if (e.key === "Enter") {
      if ((this.state.name === "art") & (this.state.name === this.state.pass)) {
        this.setState({
          user: true
        });
      } else if (
        (this.state.name === "mon") &
        (this.state.name === this.state.pass)
      ) {
        this.setState({
          user: true
        });
      } else if (
        (this.state.name === "bank") &
        (this.state.name === this.state.pass)
      ) {
        this.setState({
          user: true
        });
      } else if (
        (this.state.name === "noey") &
        (this.state.name === this.state.pass)
      ) {
        this.setState({
          user: true
        });
      } else {
        this.setState({
          show: true
        });
      }
    }
  }

  isLogout() {
    this.setState({
      user: false,
      name: "",
      pass: ""
    });
  }

  render() {
    return (
      <div className="my-app">
        <div className="container-fullhd ">
          <div className="notification">
            <Animated
              animationIn="tada"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div>
                <div class="columns">
                  <div class="column is-three-fifths">
                    <h1 class="title">
                      <img
                        src="https://image.flaticon.com/icons/svg/138/138292.svg"
                        style={{ width: "50px" }}
                        alt="Coin"
                      />
                      <strong>หนี้สิน on Cloud</strong>
                    </h1>
                    <h2 class="subtitle">
                      <code>#หนี้นี้จะไม่มีวันจางหายไปไหน!(ยกเว้นเว็บพัง)</code>
                    </h2>
                  </div>

                  <div className="column is-1 " />

                  <div class="column is-1" id="A">
                    {this.state.user
                      ? [
                          <Animated
                            animationIn="flipInX"
                            animationOut="fadeOut"
                            isVisible={true}
                          >
                            <strong>
                              {"Welcome " + this.state.name + "! "}
                            </strong>
                          </Animated>
                        ]
                      : [
                          <strong>
                            <Animated
                              animationIn="flipInX"
                              animationOut="fadeOut"
                              isVisible={true}
                            >
                              Welcome Guest!{" "}
                            </Animated>
                          </strong>
                        ]}
                  </div>

                  <div class="column is-2 is-gapless ">
                    {this.state.show
                      ? [
                          <Animated
                            animationIn="flipInX"
                            animationOut="fadeOut"
                            isVisible={true}
                          >
                            <div id="BB" class="column has-text-centered ">
                              <div class="notification is-danger">
                                <button
                                  class="delete"
                                  onClick={e => this.setState({ show: false })}
                                />
                                ชื่อ / รหัส ผิดน้าา ลองใหม่นะจ้ะ :)
                              </div>
                            </div>
                          </Animated>
                        ]
                      : [
                          this.state.user ? (
                            <Animated
                              animationIn="flipInX"
                              animationOut="flipInX"
                              isVisible={true}
                            >
                              <div class="column has-text-centered ">
                                <button
                                  id="B"
                                  class="button is-dark is-rounded"
                                  onClick={this.isLogout}
                                >
                                  {this.state.user ? "Logout" : "Login"}
                                </button>
                              </div>
                            </Animated>
                          ) : (
                            <div class="column has-text-centered ">
                              <Animated
                                animationIn="flipInX"
                                animationOut="flipInX"
                                isVisible={true}
                              >
                                <input
                                  class="input is-primary is-rounded  is-small"
                                  type="text"
                                  placeholder="Username"
                                  onChange={e =>
                                    this.setState({ name: e.target.value })
                                  }
                                />

                                <input
                                  class="input is-primary is-rounded  is-small"
                                  type="password"
                                  placeholder="Password"
                                  onChange={e =>
                                    this.setState({ pass: e.target.value })
                                  }
                                  onKeyPress={e => this.isLoginKey(e)}
                                />

                                <a
                                  class="button is-primary is-rounded is-pulled-center "
                                  onClick={this.isLogin}
                                >
                                  Login
                                </a>
                              </Animated>
                            </div>
                          )
                        ]}
                  </div>
                </div>
              </div>
            </Animated>
          </div>
        </div>
        <div className="App container">
          {this.state.user
            ? [
                <Route
                  path="/"
                  component={() => <Home name={this.state.name} />}
                />
              ]
            : [<Route path="/" component={Auth} />]}
        </div>
        <Chat name={this.state.name} how={this.state.user} />
        
      </div>
    );
  }
}

export default App;
