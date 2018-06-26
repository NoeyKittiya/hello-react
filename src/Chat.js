import React, { Component } from "react";
import { Animated } from "react-animated-css";
import firebase from "firebase";
import './chat.css'
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import Home from "./home";


class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            num: 0
        }


    }
    componentDidMount() {


        addResponseMessage("น้องหนี้พร้อมรับใช้ครับ \n \n -------------- \n \n ลบหนี้ /d ชื่อ จำนวนเงิน \n \n เพิ่มหนี้ /a ชื่อ จำนวนเงิน \n \n Ex. /a Tu 799   ");
    }
    handleNewUserMessage = (newMessage) => {

        let mode = newMessage.substring(0, 2);
        let nameStr = newMessage.substring(3, 100);
        let name = nameStr.substring(0, nameStr.indexOf(' '))
        let moneyStr = nameStr.substring(nameStr.indexOf(' ') + 1);
        let money = Number.parseInt(moneyStr)
        console.log(mode);
        console.log(name);
        console.log(money);


        if (mode === "/d") {
            let keyForDel = "";
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

            } else {
                this.app = firebase.app();

            }

            console.log(mode + " Mode")
            let user = this.props.name;
            this.db = this.app.database().ref(user + "/" + name);
            this.db.on("value", snap => {
                snap.forEach(element => {
                   
                        if (element.val().num === money) {
                            keyForDel = element.key 
                            this.db.child(keyForDel).remove()
                            addResponseMessage("ลบหนี้เรียบร้อยครับ^^")
                            
                        }
                        if(keyForDel === ""){
                            addResponseMessage("ไม่มีหนี้จำนวน "+money+"บาท ในระบบ กรุณาระบุจำนวนให้ถูกต้อง")
                        }



                })

            })



        }
        else if (mode === "/a") {
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

            } else {
                this.app = firebase.app();

            }
            let num = 0
            console.log(mode + " Mode")
            let user = this.props.name;

            this.db = this.app.database().ref(user + "/" + name)
            this.db.push({ num: money })
            addResponseMessage("เพิ่มหนี้เรียบร้อยครับ^^")
            this.props.isLoad

        }
        else {

            addResponseMessage("คำสั่งไม่ถูกต้องนะครับ!!")
            addResponseMessage("ลบหนี้ /d ตามด้วยชื่อ \n \n เพิ่มหนี้ /a ชื่อ จำนวนเงิน \n \n ");
        }
        console.log(`New message incomig! ${newMessage}`);


    }
    render() {
        return (

            <div className="chatButton">
                {
                    this.props.how ?
                        [
                            <Widget
                                handleNewUserMessage={this.handleNewUserMessage}
                                profileAvatar={'https://image.flaticon.com/icons/svg/682/682037.svg'}
                                title="น้องหนี้"
                                subtitle="#ให้เราช่วยดูแลหนี้คุณ" />
                        ]
                        :
                        [
                            " "

                        ]
                }


            </div>

        );
    }
}

export default Chat;