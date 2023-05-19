import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>
                    Hello I'am
                </h5>
                <h1>Aakash</h1>
                <h5 className="text-light">Beginner</h5>
                <CTA/>
                <HeaderSocials/>

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll_down'> Scroll Down </a>

            </div>
        </header>
    )
}

export default Header