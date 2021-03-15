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
        altText: "Laura",
        src: "../images/sarah-brown-tTdC88_6a_I-unsplash.jpg",
        caption: "This site is aboslutely amazing. Love it very much.",
    },
    {
        id: 2,
        altText: "Sarah B.",
        src: "../images/sarah-brown-tTdC88_6a_I-unsplash.jpg",
        caption:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deserunt quia voluptatem, beatae illum dolorem sapiente ea architecto fugiat, eos quasi, quibusdam iste nulla repellendus autem fuga possimus. Neque illo mollitia doloremque distinctio. Facilis animi quisquam culpa, repudiandae aut voluptates expedita deserunt hic iste. Accusamus architecto consectetur laudantium aliquam cumque?",
    },
    {
        id: 3,
        altText: "Slide 3",
        caption: "Slide 3a",
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
                    <div className="carousel-img">
                        <img src={item.src} alt="placeholder image" />
                    </div>
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
        <div>
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
