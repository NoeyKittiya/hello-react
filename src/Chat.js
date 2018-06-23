import React, { Component } from "react";
import { Animated } from "react-animated-css";
import firebase from "firebase";
import './chat.css'
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';


class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            num:0
        }


    }
    componentDidMount() {
        addResponseMessage("สวัสดี คุณกำลังต้องการอะไร ? \n \n ลบหนี้ พิมพ์ /del \n \n เพิ่มหนี้ พิมพ์ /add");
    }
    handleNewUserMessage = (newMessage) => {
        var config = {
            apiKey: "AIzaSyCPZtFdctQrB-SyR0sFfYWBW3CTpiqbDi4",
            authDomain: "finapp-1c327.firebaseapp.com",
            databaseURL: "https://finapp-1c327.firebaseio.com",
            projectId: "finapp-1c327",
            storageBucket: "finapp-1c327.appspot.com",
            messagingSenderId: "72060197826"
        };

        let mode = newMessage.substring(0, 4);
        let name = newMessage.substring(5, 15);
        console.log(mode);
        console.log(name.trim());
        if (mode === "/del") {
            console.log(mode + " Mode")




        }
        else if (mode === "/add") {
            let num = 0
            console.log(mode + " Mode")
            let user = this.props.name;
            this.app = firebase.initializeApp(config);
            this.db = this.app.database().ref(user + "/" + name)
            this.db.on("value", snap => {
                num = snap.numChildren()+1
                console.log(num)

            })
            
            //this.db.child(num).set(50)
           
            //
           
           
            
        }
        console.log(`New message incomig! ${newMessage}`);

    }
    render() {
        return (

            <div className="chatButton">
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    profileAvatar={'https://image.flaticon.com/icons/svg/682/682037.svg'}
                    title="น้องหนี้"
                    subtitle="#ให้เราช่วยดูแลหนี้คุณ"
                />

            </div>

        );
    }
}

export default Chat;