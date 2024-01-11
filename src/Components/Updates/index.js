import React from 'react';
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import './style.css';
import eid_adha_2022 from '../../Assets/Home/Updates/eid-adha-2022.jpg';
import sacrifice_hijjah from '../../Assets/Home/Updates/sacrifice-hijjah.jpeg';
import ramadan_reflection from '../../Assets/Home/Updates/ramadan-reflection.jpg';
import takbeer_tashreeq from '../../Assets/Home/Updates/takbeer-tashreeq.jpeg';
import bengali_dates from '../../Assets/Home/Updates/bengali-dates-water.jpeg';
import arafat from '../../Assets/Home/Updates/arafat.jpeg';
import eid_fitr from '../../Assets/Home/Updates/eid-fitr.jpg';
import ramadanIn30 from '../../Assets/Home/Updates/ramadanIn30.jpg';
function Updates() {
    const [mobileSlider, setMobileSlider] = useState(false);
    //   const [slideRight, setSlideRight] = useState(true);
    useEffect(() => {
        if (window.innerWidth < 600) {
            setMobileSlider(true);
        } else {
            setMobileSlider(false);
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth < 600) {
                setMobileSlider(true);
            } else {
                setMobileSlider(false);
            }
        });
    }, []);
    const images = [
        ramadanIn30,
        eid_adha_2022,
        arafat,
        takbeer_tashreeq,
        bengali_dates,
        sacrifice_hijjah,
        ramadan_reflection,
    ];
    return (
        <div>
            <h1 className="updates-title">Information and Updates</h1>
            <div
                className="updates-container snap"
                // onScroll={() => setSlideRight(false)}
            >
                {/* <div  className={slideRight? 'slide-right':'display-none '}  onClick={()=>setSlideRight(false)} >
            Slide right for more
            </div> */}
                {images.map((img, i) => {
                    return (
                        <div className="updates-img" key={i}>
                            <img
                                src={img}
                                alt=""
                                srcset=""
                                height={mobileSlider ? 350 : 550}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Updates;
