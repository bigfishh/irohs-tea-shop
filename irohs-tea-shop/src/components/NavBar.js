import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logUserOut } from "../redux/Actions/userActions"

function NavBar(props) {

    const handleLogout = () => {
        props.logUserOut()
        localStorage.clear()
        props.history.push('/login')
    }

    return (
        <div>
            <Link to='/teas'>All the Teas</Link>
            <Link to='/login'>Login</Link>
            <Link to='/profile'>Profile</Link>
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default connect(null, { logUserOut })(withRouter(NavBar))