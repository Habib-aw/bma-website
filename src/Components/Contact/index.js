import React from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import { useState, useEffect } from 'react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [receiverEmail, setEmail] = useState(null);
    const bmaEmail = 'baitul.mamur.academy@gmail.com';
    const makhtabEmail = 'bma.maktab@gmail.com';
    const makhtabNumber = '7908015208';
    const submissions = [
        // first index is value, second dropdown menu, third email
        ['MAKHTAB', 'Makhtab', makhtabEmail],
    ];
    useEffect(() => {
        document.title = 'Contact | Baitul Mamur Academy';
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_4yxhyyj',
                'template_cbru865',
                e.target,
                'MGiCNUr5py2GuGMU_'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        setSubmitted(true);
        console.log('completed');
    };

    const handleEmail = (e) => {
        const val = e.target.value;
        for (let i = 0; i < submissions.length; i++) {
            if (val === submissions[i][0]) {
                setEmail(submissions[i][2]);
                return;
            }
        }
        setEmail(bmaEmail);
    };

    return (
        <div className="contact-root">
            <div className="containers">
                <h1 className="d-flex justify-content-center mono left-container block-space contact-title">
                    Contact.
                </h1>

                <div className="right-container"></div>
            </div>
            <div className="containers">
                <div className="left-container">
                    <div className="left-content">
                        {submitted ? (
                            <h2 className="block-space d-flex justify-content-center align-items-center form">
                                Thank you for your submission
                            </h2>
                        ) : (
                            <div className=" form block-space">
                                <h2 className="cursive contact-subtitle">
                                    Have a question?{' '}
                                </h2>
                                <form
                                    onSubmit={handleSubmit}
                                    id="form"
                                    className=""
                                    autoComplete="on"
                                >
                                    <input
                                        className="input"
                                        name="firstname"
                                        type="text"
                                        placeholder="First Name*"
                                        autoComplete="given-name"
                                        required
                                    />
                                    <input
                                        className="input"
                                        name="secondname"
                                        type="text"
                                        placeholder="Second Name*"
                                        autoComplete="family-name"
                                        required
                                    />
                                    <br />
                                    <div className="d-flex">
                                        <input
                                            className="input"
                                            type="email"
                                            name="email"
                                            id=""
                                            placeholder="Email address*"
                                            autoComplete=""
                                            required
                                        />
                                        <select
                                            onChange={handleEmail}
                                            className="input"
                                            name="msg-subject"
                                            id="Message-subject"
                                            required
                                        >
                                            <option
                                                value=""
                                                disabled
                                                selected
                                                hidden
                                            >
                                                Subject of message*
                                            </option>
                                            {submissions.map((submission) => {
                                                return (
                                                    <option
                                                        value={submission[0]}
                                                    >
                                                        {submission[1]}
                                                    </option>
                                                );
                                            })}
                                            <option value="General">
                                                General
                                            </option>
                                        </select>
                                        <input
                                            type="text"
                                            hidden
                                            value={receiverEmail}
                                            name="receiver-email"
                                        />
                                    </div>
                                    <textarea
                                        className="textbox"
                                        name="msg-content"
                                        id="msg"
                                        cols="48"
                                        rows="10"
                                        placeholder="Type message here*"
                                        required
                                    ></textarea>
                                    <div className="d-flex justify-content-center">
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        )}
                        <div className="block-space">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.120863603306!2d-0.04878648434209884!3d51.5293429796387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cd885ebb13f%3A0xa83b06957ff64eca!2sBaitul%20Mamur%20Academy!5e0!3m2!1sen!2suk!4v1654802019691!5m2!1sen!2suk"
                                width="100%"
                                height="100%"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="masjid-map"
                                id="masjid-map"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <div className="right-content">
                        <div className="cursive-mono find-us block-space">
                            <h2 className="contact-subtitle">Find us at</h2>
                            Baitul Mamur Academy <br />
                            191 Roman Road <br />
                            London <br />
                            E2 0QY
                        </div>
                        <div className="cursive-mono contact-us block-space">
                            <h2 className="contact-subtitle">Contact us at</h2>
                            <div className="references">
                                <a href={'mailto:' + bmaEmail}>{bmaEmail}</a>
                            </div>
                            <h5 className="references">Makhtab only</h5>
                            <div className="references">
                                <a href={'mailto:' + makhtabEmail}>
                                    {makhtabEmail}
                                </a>
                            </div>
                            <div className="references">
                                <a href={'tel:+44' + makhtabNumber}>
                                    {'0' + makhtabNumber}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
