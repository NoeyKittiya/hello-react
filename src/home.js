import React, { Component } from 'react';
import './home.css'
import { Animated } from "react-animated-css";

class home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: ""
        }

    }



    render() {

        return (
            <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
                <div className="tile">
                   
                   <section class="hero is-primary">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title">สวัสดีคุณ {this.props.name}</h1>
                                <h2 class="subtitle">#ขอให้ทวงหนี้แล้วได้คืนนะคะ</h2>
                                    <div id="data">
                                     <h2 class="title is-3 is-pulled-left"><li>Title 1</li></h2>
                                    
                                    
                                    
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
