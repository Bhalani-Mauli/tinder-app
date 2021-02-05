import React from 'react';
import './Chats.css';
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="John"
                message="Hey! what are you doing?"
                timestamp="12 minutes ago"
                profilePic="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/19/1463047534-james-mcavoy-charles-xavier-x-men-apocalypse.jpg?resize=480:*"
            />
            <Chat
                name="Diya"
                message="Whats up?"
                timestamp="19 minutes ago"
                profilePic="https://miro.medium.com/max/688/1*qf1zwF5jKkyj1W6xn4ueZA.jpeg"
            />
            <Chat
                name="Steve"
                message="ohh no!"
                timestamp="24 minutes ago"
                profilePic="https://cdna.artstation.com/p/assets/images/images/024/175/014/large/matthew-nightingale-polish-finished.jpg?1581539844"
            />
            <Chat
                name="Stephen"
                message="How are you?"
                timestamp="7 minutes ago"
                profilePic="https://5.imimg.com/data5/JC/PU/MY-31955571/apple-laptop-500x500.jpg"
            />
        </div>
    )
}

export default Chats;