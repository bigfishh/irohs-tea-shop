import React from 'react';

import NavBar from "./components/NavBar"
import TeaContainer from "./components/TeasContainer"
import CartContainer from "./components/CartContainer"

const fetchTeasURL = "http://localhost:3000/teas"

class App extends React.Component {

  state = {
    teasArr: [],
    cartTeas: []
  }

  componentDidMount() {
    fetch(fetchTeasURL)
    .then(resp => resp.json())
    .then(teasArr => {
      this.setState({
        teasArr
      })
    })
  }

  addToCart = (teaObj) => {
    console.log(teaObj)
    this.setState({
      cartTeas: [...this.state.cartTeas, teaObj]
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <TeaContainer teasArr={this.state.teasArr} addToCart={this.addToCart}/>
        <CartContainer teasArr={this.state.cartTeas} />
      </div>
    );
  }
}

export default App;
