import React from 'react';
import Reviews from './Reviews.js'

const Testimonials = () => {
    return(
        <>
        <section className="testimonials">
            <section className="testimonialHeading">
                <h2>Testimonials</h2>
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
            </section>
        </section>
        </>
    )
}
export default Testimonials;