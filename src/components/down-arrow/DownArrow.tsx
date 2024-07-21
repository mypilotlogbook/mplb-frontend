import React, { useEffect, useRef } from 'react';
import './DownArrow.scss';
import gsap from 'gsap';

const DownArrow = () => {

    const arrowRef = useRef(null);
    const arrowDivRef = useRef(null);

    useEffect(() => {
        gsap.to(arrowRef.current, {
          y: -10,
          duration: 1,
          repeat: -1, 
          yoyo: true, 
          ease: 'power1.inOut'
        });
        gsap.to(arrowDivRef.current, {
          y: 20,
          duration: 2,
          repeat: -1, 
          yoyo: true, 
          ease: 'power1.inOut'
        });
    }, []);

    return (
        <div className='down-arrow' ref={arrowDivRef}>
            <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1721331225/down-arrow_aytjjv.png" alt="arrow" className="arrow" ref={arrowRef}/>
        </div>
    );

}

export default DownArrow;