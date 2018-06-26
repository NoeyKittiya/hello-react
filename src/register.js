import React, { Component } from 'react';
import './App.css'
import { Animated } from "react-animated-css";
class register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userN: "",
            pass: "",
            passRe: "",
            success: false,
            how: false,
            same: "กรอกข้อมูลให้ครบค่ะ",
            colorRe: "input is-info",
            


        }

    }

   doInputPass(e){
       if(e.target.value != ""){
        this.setState({pass: e.target.value, how: true,same: "กรอกรหัสผ่านอีกรอบ"})
       }else{
        this.setState({pass: e.target.value, how: false,same: "กรอกรหัสผ่าน"})
       }
   
   }

   doInputPassRe(e){
    if(e.target.value != ""){
        this.setState({
            colorRe: "input is-danger",same: "รหัสผ่านไม่ตรงกัน!"
        })
        if(e.target.value === this.state.pass)
            this.setState({passRe: e.target.value,colorRe: "input is-success",same: "Go!"})
    }else{
        this.setState({
            colorRe: "input is-info",same: "กรอกรหัสผ่านอีกรอบ"
        })
       
    }

}




doRegister(){
    console.log("AA")
}

    render() {

        return (
            <div class="container has-text-centered" id="AA" >
                {this.state.success ?
                    [


                    ]
                    :
                    [
                        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                            <div>
                                <p class="title is-1 ">Register</p>
                                <div>
                                    <div class="columns">
                                        <div class="column is-one-third ">
                                         </div>

                                        <div class="column">
                                            Username
                                         </div>
                                        <div class="column">
                                            <input class="input is-info" type="text" placeholder="username" onChange={e => this.setState({userN: e.target.value,same: "กรอกรหัสผ่าน"})}/>
                                        </div>

                                        <div class="column is-one-third "> 
                                        </div>

                                    </div>
                                    <div class="columns">
                                        <div class="column is-one-third ">
                                         </div>

                                        <div class="column">
                                            Password
                                         </div>
                                        <div class="column">
                                            <input class={this.state.how ? "input is-success" : "input is-info" } type="password" placeholder="password" onChange={e => this.doInputPass(e)}/>
                                        </div>

                                        <div class="column is-one-third "> 
                                        </div>

                                    </div>
                                    <div class="columns">
                                        <div class="column is-one-third ">
                                         </div>

                                        <div class="column">
                                            Repeat-Password
                                         </div>
                                        <div class="column">
                                            <input class={this.state.colorRe} type="password" placeholder="re-password" onChange={e => this.doInputPassRe(e)}/>
                                        </div>

                                        <div class="column is-one-third "> 
                                        </div>
                                            
                                    </div>
                                   
                                    <a class="button is-warning" onClick={e => this.doRegister()}> {this.state.same}</a>
                                </div>

                            </div>
                        </Animated>
                    ]

                }






            </div>
        );
    }
}

export default register;
