import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink} from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import ShoppingCart from "./components/shoppingcart/ShoppingCart";
import Cakes from "./components/cakes/Cakes";
import CakeCard from "./components/cakes/CakeCard";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Error from "./components/error/Error";


// rfce + tab
// div + tab --> <div></div>
// div. + tab --> <div className=""></div>
// div.special --> <div className="special"></div>
// div => main/section/article/etc.

function App() {

  return(
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/cakes" component={Cakes}/>
        <Route path="/shoppingcart" component={ShoppingCart}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout} />
        <Redirect to="/error" component={Error} />
      </Switch>
    </Router>
  )
}

export default App;
