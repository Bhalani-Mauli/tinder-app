import React, { useEffect, useState } from 'react';
import Tindercard from "react-tinder-card";
import database from './firebase';
import "./Tindercards.css";

function Tindercards() {
    const [people, setPeople] = useState([]);

    //piece of code which runs based on a condition
    useEffect(() => {
        //this is where the code runs..

        const unsubscribe = database
        .collection("people")
        .onSnapshot((snapshot) => 
           setPeople(snapshot.docs.map((doc) => doc.data())) 
        );

        return () => {
            //this is the cleanup...
            unsubscribe();
        };
    }, []);

    return(
        <div>
            <div className="tinderCards_cardContainer">
            {people.map((person) => (
                <Tindercard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up','down']}
                >
                    <div 
                        style={{ backgroundImage: `url(${person.url})`}}
                        className= "card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </Tindercard>
            ))}
            </div>
        </div>
    );
}

export default Tindercards;