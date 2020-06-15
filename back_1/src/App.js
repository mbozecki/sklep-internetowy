import React from 'react'
import {Switch, Route} from 'react-router-dom'

import './sass.scss'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import LoginPage from './pages/loginpage/loginpage.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import Navbar from './components/navbar/navbar.component'
import SignUp from './components/sign-up/sign-up.component'
import SignIn from './components/sign-in/sign-in.component'

class App extends React.Component {
  constructor() {
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){ //autoryzacja
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => { //jezeli uzytkownik sie zaloguje
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }
      else{
        this.setState({currentUser:userAuth})
      }
      


    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); 
  }
    
  render(){
    return (
      <div>
        <Navbar currentUser={this.state.currentUser} />
        <Switch>         
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component = {ShopPage} />
          <Route path="/login" component ={LoginPage} />
          <Route path="/register" component={SignUp} />
        </Switch>
      </div> 
    )   
  }

}

export default App;
