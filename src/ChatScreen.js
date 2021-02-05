import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'John',
            image: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/19/1463047534-james-mcavoy-charles-xavier-x-men-apocalypse.jpg?resize=480:*',
            message: 'Hey! what are you doing?'
        },
        {
            name: 'John',
            image: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/19/1463047534-james-mcavoy-charles-xavier-x-men-apocalypse.jpg?resize=480:*',
            message: 'Whats up?'
        },
        {
            message: 'noting, just read book'
        },
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">
                YOU MATCHED WITH JOHN ON TODAY
            </p>
            {messages.map((message) => (
                message.name ? (
                <div className="chatScreen_message">
                    <Avatar className="chatScreen_image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen_text">{message.message}</p>
                </div>
                ) : (
                 <div className="chatScreen_message">
                     <p className="chatScreen_textUser">{message.message}</p>   
                </div>
                )
                
            ))}
            
            <form className="chatScreen_input">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen_inputField"
                    placeholder="Type a message..." 
                    type="text"
                />
                <button onClick={handleSend} type="submit" className="chatScreen_inputButton">SEND</button>
            </form>
        
        </div> 
    );
}

export default ChatScreen;