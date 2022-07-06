import React from 'react'
import divider from '../img/6_Divider.png';
import background from '../img/6_pattern.png';
import imageL from '../img/6_image4.png';
import imageR from '../img/6_image5.png';
const Reservations = () => {
  return (
    <div id='reservation' className='reservation flex flex-center flex-wrap'>
        <img className='background pattern' src={background} alt="backgroun" />
        <div className='img-con'>
            <img src={imageL} alt="food" />
            <img src={imageR} alt="food" />
        </div>
        <div className='reserve flex flex-center flex-column'>
            <div className='flex flex-column flex-center'>
                <h3>Just the right food</h3>
                <img className='divider' src={divider} alt="divider" />
                <p>
                    If you've ever been to one of our restaurants, you've seen - end tasted - what keeps
                    our customers coming back for more. Perfect meterials and freshly baked food.
                </p>
                <p>
                    Delicious Lambda cakes, muffins, and gourmet coffees make us hard to resist! Stop in today and check us out! 
                    Perfect meterials and freshly baked food.
                </p>
            </div>
            <form className='flex flex-center flex-wrap'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder='Your name *' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Your email *' />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" />
                </div>
                <div>
                    <label htmlFor="tel">Phone number</label>
                    <input type="tel" name="tel" id="tel" placeholder='Your phone number *' />
                </div>
                <button className='btn' type="submit">Book now!</button>
            </form>
        </div>
    </div>
  )
}

export default Reservations