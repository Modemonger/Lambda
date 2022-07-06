import React from 'react'
import divider from '../img/6_Divider.png';
import background from '../img/6_pattern2.png';
const Menu = () => {
  return (
    <div id='menu' className='menu flex flex-center flex-column flex-wrap'>
        <img className='background pattern' src={background} alt="backgroun" />
        <div className='section appetisers flex flex-center flex-column'>
            <h3>Appetisers</h3>
            <img className='divider' src={divider} alt="divider" />
            <div className='items flex flex-column'>

                <div className='item flex flex-column'>
                    <div>
                        <h4>Tzatsiki</h4>
                        <h4>$3.99</h4>
                    </div>
                    <span className='line'></span>
                    <p>Refreshing traditional cucumber and garlic yoghurt dip.</p>
                </div>

                <div className='item flex flex-column'>
                    <div>
                        <h4>Aubergine Salad</h4>
                        <h4>$5.50</h4>
                    </div>
                    <span className='line'></span>
                    <p>Pureed eggplant, garlic, green pepper and tomato dip.</p>
                </div>

                <div className='item flex flex-column'>
                    <div>
                        <h4>Aubergine Salad</h4>
                        <h4>$5.25</h4>
                    </div>
                    <span className='line'></span>
                    <p>Pureed eggplant, garlic, green pepper and tomato dip.</p>
                </div>
            </div>
        </div>
        <div className='section salads flex flex-center flex-column'>
            <h3>Salads</h3>
            <img className='divider' src={divider} alt="divider" />
            <div className='items flex flex-column'>

                <div className='item flex flex-column'>
                    <div>
                        <h4>Olive Special</h4>
                        <h4>$5.99</h4>
                    </div>
                    <span className='line'></span>
                    <p>Refreshing traditional cucumber and garlic yoghurt dip.</p>
                </div>

                <div className='item special flex flex-column'>
                    <div>
                        <h4>Greek Salad</h4>
                        <h4>$5.50</h4>
                    </div>
                    <span className='line'></span>
                    <p>Pureed eggplant, garlic, green pepper and tomato dip.</p>
                </div>

                <div className='item flex flex-column'>
                    <div>
                        <h4>Gusto Salad</h4>
                        <h4>$5.25</h4>
                    </div>
                    <span className='line'></span>
                    <p>Pureed eggplant, garlic, green pepper and tomato dip.</p>
                </div>
            </div>
        </div>
        <div className='section starters flex flex-center flex-column'>
            <h3>Starters</h3>
            <img className='divider' src={divider} alt="divider" />
            <div className='items flex flex-column'>

                <div className='item flex flex-column'>
                    <div>
                        <h4>Haloumi</h4>
                        <h4>$3.99</h4>
                    </div>
                    <span className='line'></span>
                    <p>Refreshing traditional cucumber and garlic yoghurt dip.</p>
                </div>

                <div className='item special flex flex-column'>
                    <div>
                        <h4>Spinach Pie</h4>
                        <h4>$5.50</h4>
                    </div>
                    <span className='line'></span>
                    <p>Pureed eggplant, garlic, green pepper and tomato dip.</p>
                </div>
            </div>
        </div>
        <div className='section main-dishes flex flex-center flex-column'>
        <h3>Main Dishes</h3>
            <img className='divider' src={divider} alt="divider" />
            <div className='items flex flex-column'>

                <div className='item flex flex-column'>
                    <div>
                        <h4>Cornish Mackerel</h4>
                        <h4>$5.99</h4>
                    </div>
                    <span className='line'></span>
                    <p>Refreshing traditional cucumber and garlic yoghurt dip.</p>
                </div>

                <div className='item special flex flex-column'>
                    <div>
                        <h4>Roast Lamb</h4>
                        <h4>$5.50</h4>
                    </div>
                    <span className='line'></span>
                    <p>Pureed eggplant, garlic, green pepper and tomato dip.</p>
                </div>

                <div className='item flex flex-column'>
                    <div>
                        <h4>Fried Chicken</h4>
                        <h4>$5.25</h4>
                    </div>
                    <span className='line'></span>
                    <p>Refreshing traditional cucumber and garlic yoghurt dip.</p>
                </div>
                
                <div className='item flex flex-column'>
                    <div>
                        <h4>Pastitsio</h4>
                        <h4>$5.99</h4>
                    </div>
                    <span className='line'></span>
                    <p>Refreshing traditional cucumber and garlic yoghurt dip.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Menu