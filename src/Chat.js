import React, { Component } from "react";
import { Animated } from "react-animated-css";
import firebase from "firebase";
import './chat.css'
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
      
    }
    
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
       
      }
    render() {
        return (

            <div className="chatButton">
                        <Widget 
                        handleNewUserMessage={this.handleNewUserMessage}
                        />

            </div>

        );
    }
}

export default Chat;