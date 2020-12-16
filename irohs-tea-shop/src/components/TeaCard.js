import React from 'react'

class TeaCard extends React.Component {

    handleTeaClick = () => {
        console.log(`I've been clicked ${this.props.teaData.name}`)
        this.props.addToCart(this.props.teaData)
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

export default TeaCard