import React from 'react'
import { connect } from 'react-redux'
import { addItemToCart } from '../redux/Actions/userActions'

class CartTeaCard extends React.Component {

    handleIncrease = () => {
        fetch("http://localhost:3000/cart_teas/:id", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Authorization": localStorage.token
            }, 
            body: JSON.stringify({
                cart_id: this.props.current_cart.id,
                tea_id: this.props.teaData.tea_id,
                quantity: this.props.teaData.quantity + 1
            })
        })
        .then(resp => resp.json())
        .then(resp => {
            this.props.addItemToCart(resp)
        })
    }

    render() {
        console.log(this.props.teaData)
        return (
            <div>
                {this.props.teaData.tea_name}: {this.props.teaData.quantity}
                <button onClick={this.handleIncrease}>+</button>
                <button>-</button>
            </div>
        )
    }
}

const mapPropsToState = (globalState) => {
    return {
        current_cart: globalState.userInfo.user.current_cart
    }
}

export default connect(mapPropsToState, { addItemToCart })(CartTeaCard)