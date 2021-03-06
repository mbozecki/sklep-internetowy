import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import './sass.scss'

import {createStructuredSelector} from 'reselect'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
//import LoginPage from './pages/loginpage/loginpage.component'
import CheckoutPage from './pages/checkout/checkout.component'

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import Navbar from './components/navbar/navbar.component'
import SignUp from './components/sign-up/sign-up.component'
import SignIn from './components/sign-in/sign-in.component'

import {setCurrentUser} from './redux/user/user.actions'
import {select, selectCurrentUser} from './redux/user/user.selectors'

class App extends React.Component {

  unsubscribeFromAuth=null;

  componentDidMount(){ //autoryzacja
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => { //jezeli uzytkownik sie zaloguje
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          })
      }
      else{
        setCurrentUser(userAuth)
      }
      


    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); 
  }
    
  render(){
    return (
      <div>
        <Navbar/>
        <Switch>         
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component = {ShopPage} />
          <Route path="/checkout" component = {CheckoutPage} />
          <Route 
          exact path="/login" 
          render={()=>
            this.props.currentUser ? (<Redirect to="/"/>) : (<SignIn/>)}></Route>
          <Route 
          exact path="/register" 
          render={()=>
            this.props.currentUser ? (<Redirect to="/"/>) : (<SignUp/>)}></Route>
        </Switch>
      </div> 
    )   
  }

}

const mapStateToProps=createStructuredSelector ({
  currentUser:selectCurrentUser
});

const mapDispachToProps = dispatch => ({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispachToProps)(App);
