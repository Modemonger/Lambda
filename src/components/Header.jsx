import React from 'react'
import logo from '../img/6_Logo.png'
const Header = () => {
  return (
    <header className='flex flex-row'>
        <p id='disclaimer'>This is a demo without functionality intendend as a portfolio item and a show of skill.</p>
        <img className='logo' src={logo} alt="logo" />
        <nav>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
        </label>
            <ul className='flex flex-row link-con'>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                    
                </li>
                <li>
                    <a href="#ingredients">Ingredients</a>
                </li>
                <li>
                    <a href="#menu">Menu</a>
                    
                </li>
                <li>
                    <a href="#reviews">Reviews</a>
                    
                </li>
                <li>
                    <a href="#reservation">Reservations</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header