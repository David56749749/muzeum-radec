"use client";
import Image from 'next/image';
import style from "@/Styles/Components/carousels/ImageGalleryCarousel.module.css";
import { useState } from 'react';

const folder_path = "/GalleryImages/beach_images/";



const ImageGalleryCarousel = () => {
    const images = [
        { src: '1.jpg' },
        { src: '2.jpg' },
        { src: '3.jpg' },
        { src: '4.jpg' },
    ];
    // useState to track the current index of the image being displayed
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the previous image
    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);  // Update state with new index
    };

    // Function to move to the next image
    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);  // Update state with new index
    };

    // Function to jump to a specific image based on index
    const goToImage = (index) => {
        setCurrentIndex(index);  // Update state with the selected index
    };

    return (
        <div className={style.carousel}>
            <button className={style.leftArrow} onClick={goToPrevious}>
                &#10094;
            </button>

            <div className={style.imageWrapper}>
                <Image
                    src={folder_path + images[currentIndex].src} // Correct way to dynamically set the image source
                    alt={`Slide ${currentIndex}`} // Alt text for accessibility
                    className={style.image} // Apply CSS styling
                    width={800} // Specify width (required for Next.js Image component)
                    height={600} // Specify height (required for Next.js Image component)
                />
            </div>

            <button className={style.rightArrow} onClick={goToNext}>
                &#10095;
            </button>
            <div className={style.dots}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`${style.dot} ${currentIndex === index ? style.active : ""}`} // Highlight active dot
                        onClick={() => goToImage(index)} // Jump to specific image on dot click
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageGalleryCarousel;
