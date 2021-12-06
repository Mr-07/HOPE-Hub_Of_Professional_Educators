import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = ({ getInfo, isReview }) => {
    const reviewsList = getInfo();

    return (
        // TODO: Please create a dynmic class for review and about hope component.
        <Carousel variant='dark' className="review-listing" indicators={false}>
            {
                reviewsList.map((review) => {
                   return  <Carousel.Item>
                                {isReview && <h2>{review.name}</h2>}
                                <p>{review.review}</p>
                            </Carousel.Item>
                })
            }
        </Carousel>
    )
}

export default CarouselComponent;
