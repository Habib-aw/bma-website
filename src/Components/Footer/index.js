import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// import Item from './Item';
function Footer() {
    const donationMsg = [
        'The masjid runs on the support of the people to ensure the masjids survival and ease for the year please donate generously',
        "The council rate is paid out of the staff's pockets to allow the masjid to improve its services please donate generously",
    ];
    return (
        <div id="footer">
            <h1 className="fundraisers-title">
                Please donate to the fundraisers below
            </h1>
            <Carousel
                fade
                className="carousel-footer"
                variant="dark"
                indicators={false}
                controls={false}
            >
                {donationMsg.map((msg, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <div className="carousel-footer-item">
                                <div className="carousel-footer-text">
                                    {msg}
                                </div>
                                <Link
                                    to="/donate"
                                    className="carousel-footer-link"
                                >
                                    Find more information on the donation page
                                </Link>
                            </div>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            <p className="footer ">
                <Link to="/privacy-policy" className="privacyPolicy">
                    Privacy Policy
                </Link>
                {' | '}
                <Link to="/cookie-policy" className="privacyPolicy">
                    Cookie Policy
                </Link>{' '}
                | Baitul Mamur Academy © 2023
            </p>
        </div>
    );
}

export default Footer;
