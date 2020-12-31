import React from 'react'
import { connect } from 'react-redux'

function Profile(props) {
    const renderPreviousCarts = () => {
        return props.pastOrders.map((oldCartTea) => {
            return `${oldCartTea.id}:$${oldCartTea.cart_total} `
        })
    }

    return (
        <div>
            {props.pastOrders ? renderPreviousCarts() : <p>Loading</p>}
        </div>
    )
}

const mapStateToProps = (globalState) => {
    console.log(globalState.userInfo.user.past_orders)
    return {
        pastOrders: globalState.userInfo.user.past_orders
    }
}

export default connect(mapStateToProps)(Profile)