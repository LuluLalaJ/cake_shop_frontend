import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import ShoppingCart from "./components/shoppingcart/ShoppingCart";
import Cakes from "./components/cakes/Cakes";
import Checkout from "./components/checkout/Checkout";
import Favorites from "./components/favorites/Favorites";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Signup from "./components/signup/Signup";
import Error from "./components/error/Error";
import Review from "./components/reviews/Review";


// rfce + tab
// div + tab --> <div></div>
// div. + tab --> <div className=""></div>
// div.special --> <div className="special"></div>
// div => main/section/article/etc.

function App() {

  const [cakes, setCakes] = useState([])
  useEffect(() => {
    fetch("/cakes")
      .then((r) => r.json())
      .then(cakes => setCakes(cakes))
  }, []);

  return(
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/cakes"  render={(props) => <Cakes {...props} cakes = {cakes}/>} />
        <Route path="/shoppingcart" component={ShoppingCart}/>
        <Route path="/checkout" component={Checkout} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={Signup} />
        <Route path="/reviews/:cakeId" component={Review} />
        <Redirect to="/error" component={Error} />
      </Switch>
    </Router>
  )
}

export default App
