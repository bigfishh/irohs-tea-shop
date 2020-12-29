import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import NavBar from "./components/NavBar"
import TeaContainer from "./components/TeasContainer"
import CartContainer from "./components/CartContainer"
import LoginForm from "./components/LoginForm"
import { fetchAllTeas } from "./redux/Actions/teaActions"
import { saveUserToState } from "./redux/Actions/userActions"

const fetchTeasURL = "http://localhost:3000/teas"

class App extends React.Component {

  componentDidMount() {
    fetch(fetchTeasURL)
    .then(resp => resp.json())
    .then(teasArr => {
      this.props.fetchAllTeas(teasArr)
    })

    if(localStorage.token){
      fetch("http://localhost:3000/keep_logged_in", {
        method: "GET",
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(res => res.json())
      .then(resp => {
        if(resp.token){
          this.props.saveUserToState(resp)
        }
      })
    }
  }



  render() {
    return (
      <div className="App">
        <h1>Welcome to Iroh's Teashop</h1>
        <Link to='/teas'>All the Teas</Link>
        <Link to='/login'>Login</Link>
        <NavBar />
        <Switch>
          <Route path="/teas">
            <TeaContainer />
            <CartContainer />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
        </Switch>
      </div>
    );
  }
}

// First argument of the first ():
    // mapStateToProps (get information)
    // mapStateToProps is a callback function
        // first arg of mapStateToProps is the global state object
        // will return a POJO that will be merged into the props of the component
// Second argument of the first ():
  // mapDispatchToProps (send information)
  // mapDispatchToProps is a POJO that will be merged into the props of the component

// let fetchAllTeas = (array) => {
//   return {
//     type: "SET_TEAS",
//     payload: array
//   }
// }


export default connect(null, { fetchAllTeas, saveUserToState })(App);
