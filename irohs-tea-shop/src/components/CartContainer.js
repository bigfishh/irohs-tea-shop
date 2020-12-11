import React from 'react'
import TeaCard from './TeaCard'

function CartContainer(props) {

    const renderTeaCardsInCart = () => {
        return props.teasArr.map((teaObj) => {
            return <TeaCard key={teaObj.id} teaData={teaObj} />
        })
    }

    return (
        <div>
            <h1>Cart</h1>
            {renderTeaCardsInCart()}
        </div>
    )
}

export default CartContainer