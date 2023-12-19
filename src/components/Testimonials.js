import React from 'react';
import Reviews from './Reviews.js'

const Testimonials = () => {
    return(
        <>
        <section className="testimonials">
            <section className="testimonialHeading">
                <h1>Testimonials</h1>
            </section>
            <section className="testimonialReviews">
                {
                    Reviews.map(review => <div key={review.id} className='reviewContainer'>
                        <div className='reviewHeading'>
                            <h2>{review.title}</h2>
                            <p>{review.description}</p>
                        </div>
                        <div className='review-img'>
                            <img src={review.image} alt=''/>
                        </div>
                        
                        
                    </div>)
                }
    {/* {
                        Dishes.map(dish => <div key={dish.id} className='dishContainer'>
                            <img src={dish.image} alt=''/>
                            <div className='dishHeading'>
                                <h4>{dish.title}</h4>
                                <h5>${dish.price}</h5>
                            </div>
                            <p>{dish.description}</p>
                            <button className='Orderbtn'>Order Now</button>
                        </div>)
                    } */}
            </section>
        </section>
        </>
    )
}
export default Testimonials;