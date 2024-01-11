import React, { useEffect } from 'react';
import './about.css';
import history from '../../Assets/About/arab-history.png';
import historySlim from '../../Assets/About/arab-history-slim.png';
import future from '../../Assets/About/future.jpg';
import { useState } from 'react';
function About() {
    const [img, setImg] = useState(historySlim);
    const [historyPaddingSm, setHistoryPaddingSm] = useState({});
    const [futurePaddingSm, setFuturePaddingSm] = useState({});
    // ratio in height/width
    const historyImgRatio = 0.60980699008;
    const futureImgRatio = 0.6671875;
    useEffect(() => {
        document.title = 'About | Baitul Mamur Academy';
        if (window.innerWidth > 910) {
            setImg(history);
            setHistoryPaddingSm({});
            setFuturePaddingSm({});
        } else {
            setImg(historySlim);
            setHistoryPaddingSm({
                'padding-top': window.innerWidth * historyImgRatio + 30,
            });
            setFuturePaddingSm({
                'padding-top': window.innerWidth * futureImgRatio + 40,
            });
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth > 910) {
                setImg(history);
                setHistoryPaddingSm({});
                setFuturePaddingSm({});
            } else {
                setImg(historySlim);
                setHistoryPaddingSm({
                    'padding-top': window.innerWidth * historyImgRatio + 55,
                });
                setFuturePaddingSm({
                    'padding-top': window.innerWidth * futureImgRatio + 40,
                });
            }
        });
    }, []);
    return (
        <div>
            <div className="about-container">
                <h1 className="history-title about-title">
                    History of <br />{' '}
                    <p className="about-bma">
                        Baitul
                        <br />
                        Mamur
                        <br />
                        Academy
                    </p>
                </h1>
                <div className="about-inner-container history-inner-container">
                    <img src={img} alt="" className="about-img history-img" />
                    <div
                        className="about-text history-text"
                        style={historyPaddingSm}
                    >
                        <p>
                            Baitul Mamur Academy provides inclusive services
                            available to members of the Muslim community not
                            only to promote peace but also to teach Islamic
                            values and heritage.
                        </p>
                        BMA was founded in 1998 by Abdul Kadir (current imam).
                        The masjid originated from Abdul Kadir's house where he
                        would allow the public to pray in congregation with him.
                        He would lead the prayer and utilise his own home for
                        the benefit of the community.
                        <br />
                        <br />
                        Then in 2002 the masjid moved to the cranbrook community
                        centre upon expanding its number of visitors. The centre
                        had more capacity but it was open to the community and
                        not a place solely for salah.
                        <br />
                        <br />
                        In 2006 they moved to 85 roman road, where they
                        established a genuine masjid under the name of Baitul
                        M'amur academy, this was where it resided for 10+ years
                        and had become a established name within the community.
                        Unfortunately due to circumstances Baitul Ma'mur Academy
                        was not able to continue at 85 Roman road and had to
                        relocate.
                        <br />
                        <br />
                        In 2019 onwards Baitul Ma'mur now resides in 191 roman
                        road, which is where within the same community have
                        continued their services, benefiting the community.
                    </div>
                </div>
            </div>
            <div className="about-container future-container">
                <h1 className="future-title about-title">
                    Vision of <br />{' '}
                    <p className="about-bma">
                        Baitul
                        <br />
                        Mamur
                        <br />
                        Academy
                    </p>
                </h1>
                <div className="about-inner-container future-inner-container">
                    <img src={future} alt="" className="about-img future-img" />
                    <div
                        className="about-text future-text"
                        style={futurePaddingSm}
                    >
                        <p>
                            Baitul Mamur Academy’s vision is for a peaceful and
                            integrated community amongst all faiths and cultures
                            by providing a range of cultural and religious
                            services for our neighbourhood, drawing on our
                            Islamic values and heritage to improve quality of
                            life and enhance community cohesion.
                        </p>
                        <h4>Aims and Objectives</h4>
                        <ul>
                            <li>
                                To advance the Islamic religion, Education and
                                other charitable activities and do all other
                                lawful things necessary to advance the
                                objectives.
                            </li>
                            <li>
                                To facilitate, organise and establish Cultural,
                                Educational, Religious activities that would
                                enhance & increase the understanding of Islam as
                                a religion and the ‘Way of Life’.
                            </li>
                            <li>
                                To facilitate good community relations and to
                                provide facilities for the teaching of Hadith,
                                Holy Quran, Islamic tennats and thoughts; to
                                improve understanding of the intellectual,
                                cultural, artistic, economics science and
                                advance religious studies.
                            </li>
                            <li>
                                To co-operate with Muslim Organisations for
                                better understanding of the religion and for the
                                purpose of preserving our cultural, religious
                                traditions.
                            </li>
                            <li>
                                Our long-term ambition is to build the
                                self-confidence of Muslims in the area and seek
                                positive engagement with the community creating
                                a harmonious neighbourhood.
                            </li>
                        </ul>
                        <h4>Serving the Community, Working in unity</h4>
                        <p>
                            BMA is in the heart of LB Tower Hamlets, a borough
                            with diverse communities. Our principle & primary
                            concerns are to serve the needs of the local
                            community and to work towards the common good.
                            Recently we have enhanced the prayer hall & are
                            making improvements to the education, health
                            provision and community cohesion. We also want to
                            build bridges and remove any misconceptions about
                            the Islamic faith and its followers with the local
                            Council & all the associates including the
                            Metropolitan Police.
                        </p>
                        <h4>Promoting Tolerance and Opposing Extremism</h4>
                        <p>
                            BMA works actively to promote tolerance and
                            understanding and work along with the local mosques,
                            community centre and youth groups. We enjoy
                            excellent interfaith relation with the diverse faith
                            communities and worship in harmony in the area.
                        </p>
                        <h4>Youth and Women: Encouraging Participation</h4>
                        <p>
                            BMA offers a range of services that enable young
                            people and women to engage in a positive and safe
                            environment, with increasing numbers of youth
                            actively engaging in programmes of learning and
                            recreation, dealing with issues of anti-social
                            behaviour, drugs, extremism, and gang culture. (BMA
                            conducts DBS checks on all our trustees and staff
                            which come in contact with children and women.)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;
