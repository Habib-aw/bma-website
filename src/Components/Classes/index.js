import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'
import maktab from '../../Assets/Home/maktab.jpg';

import './classes.css';
function Classes() {
    return (
        <div className="classes">
            <h1 className="classes-title">Classes</h1>
            <div className="card-stack">
                <Card style={{ width: '18rem' }} className="card">
                    <Card.Img variant="top" src={maktab} />
                    <Card.Body>
                        <Card.Title>Maktab</Card.Title>
                        <Card.Text>
                            Enroll your child to be taught the basics of their
                            religion.
                            <br />
                            Ages: 5-14
                            <br />
                            Time: Mon-Thurs 5-7pm
                            <br />
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdz_oGG0Lu1ljlrfXMYmb3gqjnTU0BH77HF4JNMUZLLvGTG7w/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Register here
                            </a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* <Card style={{ width: "18rem" }} className="card">
          <Card.Img variant="top" src={itiqaad} />
          <Card.Body>
            <Card.Title>Aqeedah class</Card.Title>
            <Card.Text>
              Join us for our weekly aqeedah class taught by Ustadh Muzhakkir
              <div className="student-of">
                Student of Shaykh Muqbil from Yemen{" "}
              </div>
              <br />
              Time: Every Wednesday at 8pm*
              <br />
              Pricing: Free
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img variant="top" src={arabic} />
          <Card.Body>
            <Card.Title>Arabic class</Card.Title>
            <Card.Text>
              Join us for our regular arabic class taught by Ustadh Muzhakkir
              <br />
              <br />
              Time: Every Monday at 8pm*
              <br />
            </Card.Text>
          </Card.Body>
        </Card> */}
            </div>
            <div className="class-bottom"></div>
        </div>
    );
}

export default Classes;
