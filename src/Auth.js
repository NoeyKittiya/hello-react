import React, { Component } from 'react';
import './App.css'
import { Animated } from "react-animated-css";
class auth extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: ""
        }

    }



    render() {

        return (

            <div className="Auth">

                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                    <div>
                    <p class="title is-1 ">Stop !</p>
                <p class="subtitle is-3">Just Login</p>
                    </div>
                </Animated>


               


            </div>
        );
    }
}

export default auth;
