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

            <div className="Auth" id="AA">

                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                    <div>
                    <p class="title is-1 has-text-danger">Just Login !</p>
                <p class="subtitle is-3">If you never have account click sign up.</p>
                    </div>
                </Animated>


               


            </div>
        );
    }
}

export default auth;
