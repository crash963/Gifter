import React, { useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from "reactstrap";

const items = [
    {
        id: 1,
        altText: "Slide 1",
        caption: "Slide 1",
    },
    {
        id: 2,
        altText: "Slide 2",
        caption: "Slide 2",
    },
    {
        id: 3,
        altText: "Slide 3",
        caption: "Slide 3",
    },
];

const ReviewSlider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img src="" alt="placeholder image" className="carousel-img" />
                <CarouselCaption
                    className="text"
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <div>
            <style>
                {`.custom-tag {
              max-width: 100vw;
              height: 150px;
              background: grey;
            }`}
            </style>
            <Carousel
                className="gifter-carousel"
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    );
};

export default ReviewSlider;
