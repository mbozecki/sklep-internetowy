import React from 'react'
import {Switch, Route} from 'react-router-dom'

import './sass.scss'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import LoginPage from './pages/login/login.component'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component = {ShopPage} />
        <Route path="/login" component ={LoginPage} />
      </Switch>
    </div>
    
    
  )
}

export default App;
