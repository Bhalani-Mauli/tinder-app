import React from 'react';
import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Tindercards from './Tindercards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
          <Header/>
            <Tindercards/>
            <SwipeButtons/>
          </Route>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen/>
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
