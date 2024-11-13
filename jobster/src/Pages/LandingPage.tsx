import React from 'react'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
    return (
        <div>
            <br />
            <Link to={'/login'}><button>Login</button></Link>
            <br />
            <Link to={'/register'}><button>Register</button></Link>
            <br />
            <Link to={'/all-jobs'}><button>All-jobs</button></Link>

        </div>
    )
}
