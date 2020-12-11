import React from 'react'
import TeaCard from './TeaCard'

class TeaContainer extends React.Component {

    renderTeaCards = () => {
        return this.props.teasArr.map((teaObj) => {
            return <TeaCard key={teaObj.id} teaData={teaObj} addToCart={this.props.addToCart}/>
        })
    }

    render() {
        return (
            <div>
                {this.renderTeaCards()}
            </div>
        )
    }
}

export default TeaContainer
