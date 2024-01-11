import Donateform from './Donateform';
import React, { useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import './donate.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    'pk_live_51LSO1fAanRJwyb40U9vfFJEbkQ7TLkQK06M45i3Eoz0L7KnOZRRzaEvhpQhxJaJhD17UDdHtGPvIXxJhA43sVm2t00V46xQryu'
);
function Donate() {
    const callToAction =
        ', to donate please get in contact with the imam or masjid officials';
    useEffect(() => {
        document.title = 'Donate | Baitul Mamur Academy';
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <div id="donate">
            <div className="d-flex">
                <h1 className="left-wrapper mono d-flex justify-content-center donate-title block-space">
                    Donate.
                </h1>
                <div className="right-wrapper"></div>
            </div>
            <div className="donation-with-other">
                <div className="donation-all block-space">
                    <Elements stripe={stripePromise}>
                        <Donateform />
                    </Elements>
                    <div className="progress-bars">
                        <h3>Fundraisers</h3>
                        <div className="progress-bars-child">
                            <ProgressBar
                                title={'Rent'}
                                raised={0}
                                target={18200}
                                description={
                                    'Please donate towards the masjids yearly rent in order to support the masjid and keep it running' +
                                    callToAction
                                }
                            />
                        </div>
                        <div className="progress-bars-child">
                            <ProgressBar
                                title={'Council rate'}
                                raised={0}
                                target={1500}
                                description={
                                    'Please donate towards the council rent to help finance recurring bills so the staff can spend on bettering masjid services' +
                                    callToAction
                                }
                            />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="donation-other">
                    <div className="inner-donation-other">
                        <h2 className="other-donate-title donate-title cursive  block-space">
                            Other ways to donate
                        </h2>
                        <div className="other-donate">
                            <div className="other-masjid">
                                Visit the masjid in person and donate through
                                the donation box or card machine left near the
                                entrance/exit of the masjid
                            </div>
                            <div className="other-bank">
                                Donate via online banking{' '}
                                <div className="org-name">
                                    <div>Organisation name:&nbsp;</div>
                                    <div>Baitul Mamur Academy</div>
                                </div>
                                Acc no. 31643290
                                <br />
                                Sort code: 40-01-18
                            </div>
                            <div className="other-masjid">
                                Donate via SumUp following the link{' '}
                                <a
                                    href="https://pay.sumup.io/b2c/QT2RJ5YQ"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="sumup"
                                >
                                    here
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donate;
