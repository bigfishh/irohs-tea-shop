import React from 'react'
import { connect } from 'react-redux'
import { checkoutCart } from '../redux/Actions/userActions'
import CartTeaCard from './CartTeaCard'

function CartContainer(props) {

    const renderTeaCardsInCart = () => {
        return props.cart.map((teaObj) => {
            return <CartTeaCard key={teaObj.id} teaData={teaObj} propType="cartCard"/>
        })
    }

    const handleCheckout = () => {
        if (props.current_cart) {
            fetch(`http://localhost:3000/carts/${props.current_cart.id}/checkout`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json",
                    "Authorization": localStorage.token
                }
            })
            .then(resp => resp.json())
            .then(resp => {
                console.log("checkout resp", resp)
                props.checkoutCart(resp)
            })
        }
    }

    return (
        <div>
            <h1>Cart</h1>
            {props.cart ? renderTeaCardsInCart(): <h3>Loading</h3>}
            {props.cart && props.cart.length > 0 ? <button onClick={handleCheckout}>Checkout</button>: null}
        </div>
    )
}

const mapStateToProps = (globalState) => {
    console.log(globalState.userInfo.cart)
    return {
        cart: globalState.userInfo.cart,
        current_cart: globalState.userInfo.user.current_cart
    }
}

export default connect(mapStateToProps, {checkoutCart})(CartContainer)