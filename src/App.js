import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import ShoppingCart from "./components/shoppingcart/ShoppingCart";
import Cakes from "./components/cakes/Cakes";
import CakeCard from "./components/cakes/CakeCard";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import Error from "./components/error/Error";


// rfce + tab
// div + tab --> <div></div>
// div. + tab --> <div className=""></div>
// div.special --> <div className="special"></div>
// div => main/section/article/etc.

function App() {
  const [user, setUser] = useState(null);
  useEffect(()=> {
    fetch('/check_session').
    then(r => {
      if (r.ok) {
        r.json()
        .then( user => setUser(user) )
      }
    })
  }, [])

  return(
    <>
    <Nav />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/shoppingcart">
        <ShoppingCart />
      </Route>
      <Route path="/cakes">
        <Cakes />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Redirect to="/error">
        <Error />
      </Redirect>
    </Switch>
    </>
  )
}

export default App;
