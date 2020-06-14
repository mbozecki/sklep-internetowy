import React from 'react'
import {Switch, Route} from 'react-router-dom'

import './sass.scss'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import LoginPage from './pages/loginpage/loginpage.component'
import {auth} from './firebase/firebase.utils'
import Navbar from './components/navbar/navbar.component'

class App extends React.Component {
  constructor() {
    super();

    this.state={
      currentUser:null
    }
  }

  componentDidMount(){ //autoryzacja
    auth.onAuthStateChanged(user=> {
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Navbar/>
        <Switch>
          
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component = {ShopPage} />
          <Route path="/login" component ={LoginPage} />
        </Switch>
      </div> 
    )   
  }

}

export default App;
