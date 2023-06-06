import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";


// rfce + tab
// div + tab --> <div></div>
// div. + tab --> <div className=""></div>
// div.special --> <div className="special"></div>
// div => main/section/article/etc. 

function App() {
  return(
    <>
      <Home />
    </>
  )
}

export default App;
