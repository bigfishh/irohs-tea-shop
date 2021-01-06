import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logUserOut } from "../redux/Actions/userActions"

function NavBar(props) {

    const handleLogout = () => {
        props.logUserOut()
        localStorage.clear()
    }

    return (
        <div className="navbar">
            <p>Iroh's Teashop</p>
            <Link to='/teas'>All the Teas</Link>
            <Link to='/profile'>Profile</Link>
            {localStorage.token ? <Link onClick={handleLogout} to="/login">Log out</Link> : <Link to='/login'>Login</Link>}
        </div>
    )
}

export default connect(null, { logUserOut })(withRouter(NavBar))