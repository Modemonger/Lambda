import React from 'react'
import background from '../img/6_Bg.png'
import divider from '../img/6_Decoration.png'
const Home = () => {
  return (
    <div id='home' className='home flex flex-center flex-column'>
        <img id='background' className='background' src={background} alt="backgroung" />
        <h1>the right ingredients for the right food</h1>
        <img className='divider' src={divider} alt="divider" />
        <div className='select flex flex-wrap'>
            <button className='btn'>BOOK A TABLE</button>
            <button className='btn'>SEE THE MENU</button>
        </div>
    </div>
  )
}

export default Home