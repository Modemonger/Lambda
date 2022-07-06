import React from 'react'
import divider from '../img/6_Divider.png';
import background from '../img/6_bg2.png';
import wheat from '../img/6_image3.png';
import pepper from '../img/6_image2.png';
import bread from '../img/6_image1.png';
const Ingredients = () => {
  return (
    <div id='ingredients' className='ingredients flex flex-center'>
        <img className='background' src={background} alt="backgroun" />
        <div className='contents flex flex-center flex-column'>
            <div className='content flex flex-center flex-column'>
                <h3>Fine ingredients</h3>
                <img className='divider' src={divider} alt="divider" />
                <p>
                    If you've ever been to one of our restaurants, you've seen - end tasted - what keeps
                    our customers coming back for more. Perfect meterials and freshly baked food, delicious
                    Lambda cakes, muffins, and gourmet coffees make us hard to resist!
                </p>
                <p>
                    Stop in today and check us out!
                </p>
            </div>
            <div className='img-con flex flex-center'>
                <img src={wheat} alt="wheat" />
                <img src={pepper} alt="red-pepper" />
                <img src={bread} alt="bread" />
            </div>
        </div>
    </div>
  )
}

export default Ingredients