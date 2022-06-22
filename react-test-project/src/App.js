import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Appb.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import MyProfile from "./components/MyProfile";
import Items from "./components/Items";

import Rooms from "./components/Rooms";
import Furniture from "./components/Furniture";
import LightningDecor from "./components/LightningDecor";
import Kitchen from "./components/Kitchen";
import BathBody from "./components/BathBody";
import Garden from "./components/Garden";

import Navbarmenub from "./components/menu/Navbarmenub";

import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router basename="/">
        {/* Add Menu Component */}

        <Navbarmenub />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/MyProfile" component={MyProfile} />
          <Route path="/Items" component={Items} />

          <Route path="/Rooms" component={Rooms} />
          <Route path="/Furniture" component={Furniture} />
          <Route path="/LightningDecor" component={LightningDecor} />
          <Route path="/Kitchen" component={Kitchen} />
          <Route path="/BathBody" component={BathBody} />
          <Route path="/Garden" component={Garden} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
