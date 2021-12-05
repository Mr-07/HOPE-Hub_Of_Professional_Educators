import CarouselComponent from "./CarouselComponent.jsx";
import React from "react";
import '../../styles/style.scss';
import { getReviews, getHopeInfo } from "../../common/utilities.jsx";

export default function Home() {
    return (
        <React.Fragment>
            <div id={`home-content`} style={{ height: 'calc(70vh)', backgroundColor: 'grey' }}>
                <div id='hopeAnimate'>HOPE</div>
            </div>
            <CarouselComponent getInfo={ getHopeInfo } />
            <CarouselComponent getInfo={getReviews} isReview={true} />
        </React.Fragment>
    )
}
