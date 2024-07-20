import React, { useState } from 'react';
import './LoadingIcon.scss';
import { LogoImageProps } from '../../typescript/types/type';

const LoadingIcon = () => {

    const [images, setImages] = useState<LogoImageProps[]>([
        { src: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331229/logo-flight-2_yoodbn.png' },
        { src: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331230/logo-flight-3_etxbki.png' },
        { src: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331229/logo-flight-4_bhdotu.png' },
        { src: 'https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331229/logo-flight-5_u0lzue.png' },
    ]);

    return (
        <div className="test animated-logo">
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