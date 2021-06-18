import './App.css';
import {Header} from './components/Header/Header'

import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import {AllCategories} from './components/Categories/AllCategories/AllCategories'
import {Home} from './components/Pages/Home/Home'
import {OneProduct} from './components/OneProduct/OneProduct'

function App() {

  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all/categories" component={AllCategories} />
        <Route exact path="/single/:id" component={OneProduct} />
      </Switch>
    </>
  );
}

export default App;
