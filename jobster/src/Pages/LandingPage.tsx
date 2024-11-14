import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/logo.svg'
import main from '../../public/main.svg'
import Wrapper from '../assets/wrappers/LandingPageWrapper'

export const LandingPage = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt='J' />
            </nav>
            <div className='page'>
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
                    <img src={main} alt='main main-img' />
                </div>

            </div>
        </Wrapper>
    )
}
