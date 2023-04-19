import carouselItem from '@/interfaces/carousel-item';

import imageCarouselClasses from './ImageCarousel.module.css';

import { Fragment, useEffect, useState } from 'react';

const CAROUSEL_ITEMS: carouselItem[] = [
    {
        src: "/banner-0.png",
        alt: "Banner 0",
    },
    {
        src: "/banner-1.png",
        alt: "Banner 1",
    },
    {
        src: "/banner-2.png",
        alt: "Banner 2",
    },
];

const ImageCarousel: React.FC = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [showSlide, setShowSlide] = useState(0);
    const [activeDot, setActiveDot] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);


    function plusSlides(n: number) {
        setIsClicked(true);
        setSlideIndex(prevSlideIndex => {
            const newSlideIndex = prevSlideIndex + n;
            if (newSlideIndex > CAROUSEL_ITEMS.length) return 1;
            if (newSlideIndex < 1) return CAROUSEL_ITEMS.length;
            return newSlideIndex;
        });
    }

    function currentSlide(n: number) {
        setSlideIndex(n);
    }

    useEffect(() => {
        let timer: NodeJS.Timer | undefined = undefined;
        if (!isHovered || isClicked) {
            setShowSlide(slideIndex - 1);
            setActiveDot(slideIndex - 1);

            timer = setInterval(() => plusSlides(1), 5000);

            setIsClicked(false);
        }

        return () => clearInterval(timer);
    }, [slideIndex, isHovered, isClicked]);

    const mouseHoverHandler = () => {
        setIsHovered(true);
    }

    const mouseLeaveHandler = () => {
        setIsHovered(false);
    }

    return (
        <Fragment>
            <div className={imageCarouselClasses["slideshow-container"]} onMouseOver={mouseHoverHandler} onMouseLeave={mouseLeaveHandler}>
                {CAROUSEL_ITEMS.map((carouselItem, idx) => {
                    if (showSlide !== idx) return false;
                    return (
                        <div className={`${imageCarouselClasses["slide-in"]}`} key={carouselItem.src}>
                            {/* <div className="numbertext">1 / 3</div> */}
                            <img src={carouselItem.src} alt={carouselItem.alt} key={carouselItem.src} />
                            {carouselItem.caption && <div className={imageCarouselClasses["text"]}>Caption Text</div>}
                        </div>
                    )
                })}

                <a className={imageCarouselClasses["next"]} onClick={() => plusSlides(1)}>&#10095;</a>
                <a className={imageCarouselClasses["prev"]} onClick={() => plusSlides(-1)}>&#10094;</a>
            </div>
            <br />

            <div className={imageCarouselClasses.dots}>
                {CAROUSEL_ITEMS.map((carouselItem, idx) => {
                    let classes = imageCarouselClasses["dot"];
                    if (activeDot === idx) classes = `${classes} ${imageCarouselClasses["active"]} `;
                    return <span className={classes} key={carouselItem.src} onClick={() => currentSlide(idx + 1)}></span>
                })}
            </div>
        </Fragment>
    );
}

export default ImageCarousel;