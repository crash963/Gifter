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
        altText: "Tom P.",
        src: "../images/tom-prejeant-x5I4yCFiZds-unsplash.jpg",
        caption: "The Gifter is absolutely amazing. I can check what my friends want and decide which item to buy for them based on my budget. We can also plan ahead everything with other friends in the chat under each wish! It's really clever!",
    },
    {
        id: 2,
        altText: "Sarah B.",
        src: "../images/sarah-brown-tTdC88_6a_I-unsplash.jpg",
        caption:
            "I never knew what to buy to my in-laws. But ever since we are all using Gifter I can just go and buy exactly what they will love. It's a game changer!",
    },
    {
        id: 3,
        altText: "Laura",
        src: "../images/woman-918788_640.jpg",
        caption:
            "I always get the gifts I really like thanks to this website. Gifter is the BEST!",
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
                <div className="carousel-inside">
                    <img
                        src={item.src}
                        alt="placeholder image"
                        className="carousel-img"
                    />

                    <CarouselCaption
                        className="carousel-text"
                        captionText={item.caption}
                        captionHeader={item.altText}
                    />
                </div>
            </CarouselItem>
        );
    });

    return (
        <div className="carousel-section">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                interval="6500"
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
