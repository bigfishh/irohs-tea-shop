import React from 'react'
import { connect } from 'react-redux'
import CartTeaCard from './CartTeaCard'

function CartContainer(props) {

    const renderTeaCardsInCart = () => {
        return props.cart.map((teaObj) => {
            console.log(teaObj)
            return <CartTeaCard key={teaObj.id} teaData={teaObj} />
        })
    }

    return (
        <div>
            <h1>Cart</h1>
            {props.cart ? renderTeaCardsInCart(): <h3>Loading</h3>}
        </div>
    )
}

const mapStateToProps = (globalState) => {
    return {
        cart: globalState.userInfo.cart,
        teas: globalState.teaInfo.teas
    }
}

export default connect(mapStateToProps)(CartContainer)