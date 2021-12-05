import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../styles/style.scss';

const CarouselComponent = (props) => {
    const { getInfo, isReview } = props;
    const reviewsList = getInfo();
    
    return (
        // TODO: Please create a dynmic class for review and about hope component.
        <Carousel variant='dark' className="review-listing" indicators={false}>
            <Carousel.Item>
                {isReview && <h2>{reviewsList[0].name}</h2>}
                <p>{reviewsList[0].review}</p>
            </Carousel.Item>
            <Carousel.Item>
                { isReview && <h2>{reviewsList[1].name}</h2>}
                <p>{reviewsList[1].review}</p>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent;
