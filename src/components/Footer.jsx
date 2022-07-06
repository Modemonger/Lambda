import React from 'react'
import divider from '../img/6_Divider.png';

const Footer = () => {
  return (
    <footer className='flex flex-center flex-wrap'>
        <div>
            <h4>About us</h4>
            <img className='divider' src={divider} alt="divider" />
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam optio, iusto ad odit a obcaecati repudiandae ut. Aspernatur quis nemo voluptates voluptatum, voluptate commodi dolore.
            </p>
        </div>
            
        <div>
            <h4>Opening hours</h4>
            <img className='divider' src={divider} alt="divider" />
            <p><span>Mon-Thu:</span> 7:00am-8:00pm</p>
            <p><span>Fri-Sun:</span> 7:00am-10:00pm</p>
        </div>

        <div>
            <h4>Our location</h4>
            <img className='divider' src={divider} alt="divider" />
            <p><span>19th Paradise Street Sitia</span></p>
            <p><span>128 Meserole Avenue</span></p>
        </div>
    </footer>
  )
}

export default Footer