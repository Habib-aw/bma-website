import React, { useEffect, useState } from 'react';
import './style.css';
function ProgressBar({ title, raised, target, description }) {
    const [Style, setStyle] = useState(null);

    const [centre, setCentre] = useState(false);
    const percentage = Math.floor((raised / target) * 100);
    const StyleSm = {
        width: `${100 - percentage * 2}%`,
        color: 'black',
    };
    useEffect(() => {
        if ((window.innerWidth < 400 && percentage < 15) || percentage <= 10) {
            setCentre(true);
        } else {
            setCentre(false);
        }
        window.addEventListener('resize', () => {
            if (
                (window.innerWidth < 400 && percentage < 15) ||
                percentage <= 10
            ) {
                setCentre(true);
            } else {
                setCentre(false);
            }
        });
        setTimeout(() => {
            const style = {
                opacity: 1,
                width: `${percentage}%`,
                backgroundImage:
                    'linear-gradient(90deg, rgba(111,197,82,1) 50%, rgba(9,121,69,1) 100%)',
                color: 'black',
            };
            setStyle(style);
        }, 0);
    }, []);
    return (
        <div id="progressBar" style={{ textAlign: 'center' }}>
            <h2 className="progress-bar-title">{title}</h2>
            <p className="progress-description-small">{description}</p>
            <div className="progress-info">
                <div className="d-flex">
                    <div>
                        <h5>Raised</h5>
                        <span>£{raised.toLocaleString()}</span>
                    </div>
                    <div className="vr"></div>
                </div>
                <p className="progress-description">{description}</p>
                <div className="d-flex">
                    <div className="vr"></div>
                    <div>
                        <h5>Target</h5>
                        <span>£{target.toLocaleString()}</span>
                    </div>
                </div>
            </div>
            <div className="progress-both-bar progress-outer-bar">
                {centre ? (
                    <div className="progress-both-bar d-flex">
                        <div className="progress-both-bar" style={Style}></div>
                        <div
                            style={StyleSm}
                            className="percentageSm percentage-txt"
                        >
                            {percentage}%
                        </div>
                    </div>
                ) : (
                    <div
                        className="progress-both-bar d-flex justify-content-center align-items-center percentage-txt"
                        style={Style}
                    >
                        {percentage}%
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProgressBar;
