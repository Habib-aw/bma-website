import React, { useEffect } from 'react';

function Cookiepolicy() {
    useEffect(() => {
        document.title = 'Cookie Policy | Baitul Mamur Academy';
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    const cookiesInfo = [
        ['m', 'This is used to help detect and prevent fraud on transactions'],
        [
            'nsr',
            'This is used to help detect and prevent fraud on transactions',
        ],
        ['__stripe__mid', 'This is used to help process payments'],
        ['__stripe__Sid', 'This is used to help process payments'],
    ];
    return (
        <div className="p-5">
            <h1>Cookie Policy</h1>
            <p>
                In the context of this document, 'This website' refers to
                www.baitulmamur.academy.
            </p>
            <p>
                This website does not use any cookies of its own such as
                analytical or advertisement cookies.
                <br />
                Apart from the cookie explained in 'other'.
            </p>
            <h4>Stripe</h4>
            <p>
                Stripe provides services to allow purchases to take place online
                and is used on the donation page to collect donations.
                <br />
                Below is a list of essential cookies used by stripe.
            </p>
            <table>
                {cookiesInfo.map((data, key) => {
                    return (
                        <tr>
                            <th>{data[0]}</th>
                            <td>{data[1]}</td>
                        </tr>
                    );
                })}
            </table>
            <p>
                These cookies can expire anywhere from one day to 10 years
                <br />
                Read more about stripe cookies{' '}
                <a
                    href="https://stripe.com/gb/privacy#1-personal-data-that-we-collect-and-how-we-use-and-share-it"
                    target="_blank"
                    rel="noreferrer"
                >
                    here
                </a>
            </p>
            <h4>Other</h4>
            <table>
                <tr>
                    <th>CookieConsent</th>
                    <td>
                        This value tells the computer whether to display the
                        initial cookie message when first visiting this website.
                    </td>
                </tr>
            </table>
            <p>This cookie may expire in roughly 2 years </p>
            <div className="cookie-bottom"></div>
        </div>
    );
}

export default Cookiepolicy;
