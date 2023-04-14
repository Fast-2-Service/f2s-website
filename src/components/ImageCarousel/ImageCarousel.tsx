import Carousel from 'react-bootstrap/Carousel';

import carouselItem from '@/interfaces/carousel-item';

import imageCarouselClasses from './ImageCarousel.module.css';

const carouselItems: carouselItem[] = [
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
    return (
        <Carousel variant='dark' className={imageCarouselClasses.carousel}>
            {carouselItems.map(carouselItem => {
                return (
                    <Carousel.Item interval={3000} className={imageCarouselClasses.item} key={carouselItem.src}>
                        <img
                            className="d-block"
                            src={carouselItem.src}
                            alt={carouselItem.alt}
                        />
                        {carouselItem.caption && <Carousel.Caption>
                            <h3>{carouselItem.caption.title}</h3>
                            <p>{carouselItem.caption.content}</p>
                        </Carousel.Caption>}
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default ImageCarousel;