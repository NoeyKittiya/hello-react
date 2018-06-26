import React, { Component } from 'react';
import './App.css'
import { Animated } from "react-animated-css";
import firebase from "firebase";

class register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userN: "",
            pass: "",
            passRe: "",
            success: false,
            how: false,
            userDulpicate: true,
            same: "กรอกข้อมูลให้ครบค่ะ",
            colorRe: "input is-info",



        }
        

    }
    
    checkUser(name){
        var config = {
            apiKey: "AIzaSyCPZtFdctQrB-SyR0sFfYWBW3CTpiqbDi4",
            authDomain: "finapp-1c327.firebaseapp.com",
            databaseURL: "https://finapp-1c327.firebaseio.com",
            projectId: "finapp-1c327",
            storageBucket: "finapp-1c327.appspot.com",
            messagingSenderId: "72060197826"
        };
        
        if (!firebase.apps.length) {
            this.app = firebase.initializeApp(config);
            console.log('open at register')
        } else {
            this.app = firebase.app();
        }
        if(name !== ""){
            this.db = this.app.database().ref("userInfo");
            this.db.on("value", snap => {
               if(snap.val()!=null){
                snap.forEach(element => {
                    let named = element.val().userName
                    
                    if(name.toLowerCase()===named.toLowerCase()){
                        if(named===""){
                            this.setState({
                                userDulpicate: false
                                
                            })
                         
                        }else{
                            this.setState({
                                userDulpicate: true
                            })
                           
                        }
                       
                    }
                    else{
                        console.log("4")
                        this.setState({
                            userDulpicate: false,
                            userN: name
                        })
                    }
                   
                })
                
                }else{
                    
                    this.setState({
                        userDulpicate: false,
                        userN: name
                    })
                
                }
                
                
    
            })
        }else{
        
            this.setState({
                userDulpicate: true
            })
        }
        
        
    }
    doInputPass(e) {
        if (e.target.value !== "") {
            this.setState({ pass: e.target.value, how: true, same: "กรอกรหัสผ่านอีกรอบ" })
        } else {
            this.setState({ pass: e.target.value, how: false, same: "กรอกรหัสผ่าน" })
        }

    }

    doInputPassRe(e) {
        if (e.target.value !== "") {
            this.setState({
                colorRe: "input is-danger", same: "รหัสผ่านไม่ตรงกัน!"
            })
            if (e.target.value === this.state.pass)
                this.setState({ passRe: e.target.value, colorRe: "input is-success", same: "Go!" })
        } else {
            this.setState({
                colorRe: "input is-info", same: "กรอกรหัสผ่านอีกรอบ"
            })

        }

    }




    doRegister() {
        var config = {
            apiKey: "AIzaSyCPZtFdctQrB-SyR0sFfYWBW3CTpiqbDi4",
            authDomain: "finapp-1c327.firebaseapp.com",
            databaseURL: "https://finapp-1c327.firebaseio.com",
            projectId: "finapp-1c327",
            storageBucket: "finapp-1c327.appspot.com",
            messagingSenderId: "72060197826"
        };
        if(this.state.userDulpicate === false){
            if (!firebase.apps.length) {
                this.app = firebase.initializeApp(config);
                console.log('open at register')
            } else {
                this.app = firebase.app();
            }
            this.db = this.app.database().ref("userInfo");
            if(this.state.pass === this.state.passRe){

                this.db.push({ userName: this.state.userN,passWord:this.state.pass})
                this.setState({
                    userN: "",
                    pass: "",
                    passRe: "",
                    success: true
                })
            }else{
                alert('รหัสไม่ตรงกัน')
            }
        }else{
            alert('Username ซ้ำค่ะ')
        }
        
        
    }

    render() {

        return (
            <div class="container has-text-centered" id="AA" >
                {this.state.success ?
                    [
                        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                        <div>
                            <h1 class="title is-1 has-text-success">Done ! <br />Try to login.</h1>
                            </div>
                        </Animated>
                    ]
                    :
                    [
                        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                            <div>
                                <p class="title is-1 has-text-link">Register</p>
                                <div>
                                    <div class="columns">
                                        <div class="column is-one-third ">
                                        </div>

                                        <div class="column">
                                            Username
                                         </div>
                                        <div class="column">
                                            <input class={this.state.userDulpicate ?  "input is-danger":"input is-success"} type="text" placeholder="username" onChange={e => this.checkUser(e.target.value)} />
                                            
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
                                            <input class={this.state.how ? "input is-success" : "input is-info"} type="password" placeholder="password" onChange={e => this.doInputPass(e)} />
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
                                            <input class={this.state.colorRe} type="password" placeholder="re-password" onChange={e => this.doInputPassRe(e)} />
                                        </div>

                                        <div class="column is-one-third ">
                                        </div>

                                    </div>

                                    <a class="button is-warning" style={this.state.userDulpicate ? {pointerEvents:'none'} : {pointerEvents:''}} onClick={e => this.doRegister()}> {this.state.same}</a>
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
