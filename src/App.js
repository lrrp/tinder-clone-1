import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import ChatScreen from "./components/chatScreen/ChatScreen";
import Chats from "./components/chats/Chats";
import Header from "./components/header/Header";
import SwipeButtons from "./components/swipeButtons/SwipeButtons";
import TinderCards from "./components/tinderCards/TinderCards";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chats/:person">
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
