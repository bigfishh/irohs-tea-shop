import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import NavBar from "./components/NavBar"
import TeaContainer from "./components/TeasContainer"
import CartContainer from "./components/CartContainer"
import LoginForm from "./components/LoginForm"
import { fetchAllTeas } from "./redux/Actions/teaActions"

const fetchTeasURL = "http://localhost:3000/teas"

class App extends React.Component {

  state = {
    cartTeas: []
  }

  componentDidMount() {
    fetch(fetchTeasURL)
    .then(resp => resp.json())
    .then(teasArr => {
      this.props.fetchAllTeas(teasArr)
    })
  }

  addToCart = (teaObj) => {
    console.log(teaObj)
    this.setState({
      cartTeas: [...this.state.cartTeas, teaObj]
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>Welcome to Iroh's Teashop</h1>
        <Link to='/teas'>All the Teas</Link>
        <Link to='/login'>Login</Link>
        <NavBar />
        <Switch>
          <Route path="/teas">
            <TeaContainer addToCart={this.addToCart}/>
            <CartContainer teasArr={this.state.cartTeas} />
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

let mapDispatchToProps = {
  fetchAllTeas: fetchAllTeas
}

export default connect(null, mapDispatchToProps)(App);
