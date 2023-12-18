import React from 'react'
import Dishes from './Dishes.js'

const Menu = () => {
    return(
        <section className='specials'>
            <div className='specialsHeading'>
                <h2>This week's specials!</h2>
                <button>Online Menu</button>
            </div>
            <div className='specialsDishes'>
                {
                    Dishes.map(dish => <div key={dish.id} className='dishContainer'>
                        <img src={dish.image} alt=''/>
                        <div className='dishHeading'>
                            <h4>{dish.title}</h4>
                            <h5>${dish.price}</h5>
                        </div>
                        <p>{dish.description}</p>
                        <button className='Orderbtn'>Order Now</button>
                    </div>)
                }
            </div>
        </section>

    )
}

export default Menu;
