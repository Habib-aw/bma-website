import React, { useEffect } from 'react';

function Privacypolicy() {
    useEffect(() => {
        document.title = 'Privacy Policy | Baitul Mamur Academy';
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <div className="p-5">
            <h1>Privacy Policy</h1>
            <p>
                In the context of this document, 'This website' refers to
                www.baitulmamur.academy.
            </p>
            <h3>Data collection</h3>
            <p>
                This website does not collect any information for itself such as
                for marketing or analytical purposes.
                <br />
                However, data may be collected by other resources the website
                uses in order to function, this is listed below.
            </p>
            <h5>Stripe</h5>
            <p>
                Stripe provides services to allow purchases to take place online
                and is used on the donation page to collect donations.
                <br />
                <br />
                Stripe stores “Transaction Data” as mentioned in their privacy
                policy this could include the following: your payment method
                information (such as credit or debit card number, bank account
                information or payment card image selected by you), merchant and
                location, purchase amount, date of purchase, and in some cases,
                some information about what you have purchased and your past
                purchases.
                <br />
                More information can be found{' '}
                <a
                    href="https://stripe.com/gb/privacy"
                    target="_blank"
                    rel="noreferrer"
                >
                    here{' '}
                </a>
            </p>
            <h5>Form</h5>
            <p>
                When using the form on the contact page you have to input your
                email address, name and message contents (subject and message).
                On pressing submit this information is sent to relevant emails
                depending on the subject you have chosen e.g. choosing maktab
                will send an email to the maktab email etc.
                <br />
                This information is not directly stored by this website in any
                way.
            </p>
            <div className="cookie-bottom"></div>
        </div>
    );
}

export default Privacypolicy;
