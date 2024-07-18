import React, { useState } from 'react';
import './LoadingIcon.scss';

type Image = {
    src: string;
}

const LoadingIcon = () => {

    const [images, setImages] = useState<Image[]>([
        { src: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331229/logo-flight-2_yoodbn.png' },
        { src: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331230/logo-flight-3_etxbki.png' },
        { src: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331229/logo-flight-4_bhdotu.png' },
        { src: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331229/logo-flight-5_u0lzue.png' },
    ]);

    return (
        <div className="animated-logo">
            {
                images.map((image, index) => {
                    return (
                        <img src={image.src} alt="logo" key={index}/>
                    )
                })
            }
        </div>
    );

}

export default LoadingIcon;