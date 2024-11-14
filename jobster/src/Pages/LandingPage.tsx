import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/logo.svg'
import main from '../../public/main.svg'

export const LandingPage = () => {
    return (
        <main>
            <nav>
                <img src={logo} alt='J' />
            </nav>

            <div>
                <div>
                    <h1>Job <span>Tracking</span> App</h1>
                    <p>Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
                        fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
                        crucifix heirloom meggings bicycle rights.</p>
                    <Link to={'/register'}>
                        <button className='btn btn-hero'>Login / Register</button>
                    </Link>
                </div>
                <div>
                    <img src={main} alt='main' />
                </div>

            </div>
        </main>
    )
}
