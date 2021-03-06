import React from 'react'
import { connect } from 'react-redux'
import { addItemToCart } from '../redux/Actions/userActions'

class TeaCard extends React.Component {

    handleTeaClick = () => {
        let clickedCartTea = this.props.current_cart.cart_teas.find((cart_tea) => cart_tea.tea_id === this.props.teaData.id)
        let teaQuant = 1
        if (clickedCartTea) {
            teaQuant = clickedCartTea.quantity + 1
        }
        fetch("http://localhost:3000/cart_teas", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Authorization": localStorage.token
            }, 
            body: JSON.stringify({
                cart_id: this.props.current_cart.id,
                tea_id: this.props.teaData.id,
                quantity: teaQuant
            })
        })
        .then(resp => resp.json())
        .then(resp => {
            this.props.addItemToCart(resp)
        })
    }

    render() {
        return(
            <div>
                <p>{this.props.teaData.name}</p>
                <img onClick={this.handleTeaClick} style={{width: '200px', height: '200px'}} src={this.props.teaData.image1} alt={this.props.teaData.name}/>
            </div>
        )
    }
}

const mapPropsToState = (globalState) => {
    return {
        current_cart: globalState.userInfo.user.current_cart
    }
}

export default connect(mapPropsToState, { addItemToCart })(TeaCard)