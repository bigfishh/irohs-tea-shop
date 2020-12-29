import React from 'react'

class CartTeaCard extends React.Component {

    render() {
        return (
            <div>
                {this.props.teaData.tea_name}: {this.props.teaData.quantity}
            </div>
        )
    }
}
export default CartTeaCard