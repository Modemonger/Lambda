import React from 'react'
import divider from '../img/6_Divider.png';
import background from '../img/6_bg3.png';
const Reviews = () => {
  return (
    <div id='reviews' className='reviews flex flex-center'>
        <img className='background' src={background} alt="backgroun" />
        <div className='content flex flex-center flex-column'>
            <h3>Guest Reviews</h3>
            <img className='divider' src={divider} alt="divider" />
            <p>
                <span>"</span>If you've ever been to one of our restaurants, you've seen - end tasted - what keeps
                our customers coming back for more. Perfect meterials and freshly baked food, delicious
                Lambda cakes, muffins, and gourmet coffees make us hard to resist!Stop in today and check us out!<span>"</span>
            </p>
            <p className='quote'>-food inc, New York</p>
        </div>
    </div>
  )
}

export default Reviews