// components/Gallery.js
"use client"
import React from 'react';
import { useState } from 'react';
import styles from '@/Styles/Components/landing/main_gallery.module.css';
import Image from 'next/image';

const MainGallery = () => {
    const folder_path = "/GalleryImages/beach_images/";
    const images = [
        { src: `${folder_path}1.jpg`, alt: 'Apartment 1' },
        { src: `${folder_path}2.jpg`, alt: 'Apartment 2' },
        { src: `${folder_path}3.jpg`, alt: 'Apartment 3' },
        { src: `${folder_path}4.jpg`, alt: 'Apartment 4' },
        { src: `${folder_path}5.jpg`, alt: 'Apartment 5' },
    ];
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };
    return (
        <div className="section">
            <div className='container'>
                <section className={styles.gallerySection}>
                    <div className={styles.galleryContainer}>
                        {images.map((image, index) => (
                            <div key={index} className={styles.imageWrapper} onClick={() => handleImageClick(image)}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className={styles.galleryImage}
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                    {selectedImage && (
                        <div className={styles.modal} onClick={closeModal}>
                            <img src={selectedImage.src} alt={selectedImage.alt} className={styles.modalImage} />
                        </div>
                    )}
                </section>
            </div >
        </div >
    );
};

export default MainGallery;
