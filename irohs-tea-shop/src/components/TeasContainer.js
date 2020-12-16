import React from 'react'
// any component that needs to get/set information from our global state needs the line below
import {connect} from 'react-redux'
import TeaCard from './TeaCard'

class TeaContainer extends React.Component {

    renderTeaCards = () => {
        return this.props.teas.map((teaObj) => {
            return <TeaCard key={teaObj.id} teaData={teaObj} addToCart={this.props.addToCart}/>
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Teas Container</h2>
                {this.renderTeaCards()}
            </div>
        )
    }
}

// First argument of the first ():
    // mapStateToProps (get information)
    // mapStateToProps is a callback function
        // first arg of mapStateToProps is the global state object
        // will return a POJO that will be merged into the props of the component

let mapStateToProps = (globalState) => {
    return {
        teas: globalState.teaInfo.teas
    }
}

export default connect(mapStateToProps)(TeaContainer)
