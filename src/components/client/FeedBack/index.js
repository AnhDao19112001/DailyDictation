// Import Swiper React components
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle'
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./FeedBack.css"

const FeedBack = () => {

    const swiperRef = useRef(null);
    useEffect(() => {
        register();

        const params = {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            pagination: {
                clickable: true,
            },
            navigation: true
        };

        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);

    return (
        <>
            <section className="testimonials">
                <div className="container">
                    <h2>What Our Users Say</h2>
                </div>

                <div
                    className="swiper-container"
                >
                    <div className="wrapper_container">

                        <swiper-container className='swiper-wrapper' ref={swiperRef} init="false">
                            <div className="swiper-slide testimonial-item">
                                <p>
                                    "This site has tremendously improved my English listening
                                    skills!"
                                </p>
                                <span>- User 1</span>
                            </div>
                            <div className="swiper-slide testimonial-item">
                                <p>
                                    "The daily exercises are challenging and fun. Highly
                                    recommend!"
                                </p>
                                <span>- User 2</span>
                            </div>
                            <div className="swiper-slide testimonial-item">
                                <p>
                                    "I love the user-friendly interface and the quality of the
                                    exercises!"
                                </p>
                                <span>- User 3</span>
                            </div>
                        </swiper-container>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FeedBack;