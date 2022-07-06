import React from 'react'
import divider from '../img/6_Divider.png';
import chef from '../img/6_cook.png';
import steak from '../img/6_dish.png';
import pattern from '../img/6_pattern.png';

const About = () => {
  return (
    <div id='about' className='about flex flex-center flex-row flex-wrap'>
        <img src={pattern} alt="background" className='background pattern'/>
        <div className='content flex flex-center flex-column'>
            <h3>Just the right food</h3>
            <img className='divider' src={divider} alt="divider" />
            <p>
                If you've ever been to one of our restaurants, you've seen - end tasted - what keeps
                our customers coming back for more. Perfect meterials and freshly baked food, delicious
                Lambda cakes, muffins, and gourmet coffees make us hard to resist!
            </p>
            <p>
                Stop in today and check us out!
            </p>
            <div className='chef-con'>
                <img src={chef} alt="chef" />
            </div>
        </div>
        <img src={steak} alt="plated steak" />
    </div>
  )
}

export default About