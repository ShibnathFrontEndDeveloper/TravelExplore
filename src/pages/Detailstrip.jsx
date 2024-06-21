import Header from "../Header";
import Footer from "./Footer";

import { Container, Form, Button, Badge} from "react-bootstrap";
import { useState } from "react";
import {Link} from 'react-router-dom'
import './Detailstrip.css'



function Detailstrip() {
     const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
        <Header/>

         <Container>
            <div className="position_container">
              <div className="position_Row">
                <div className="position_box1">
                  <div className="position_box_heading">
                    <h4>Search your destination</h4>
                  </div>
                  <Form noValidate validated={validated} onSubmit={handleSubmit} className="mt-4">
                    <Form.Group className="mb-3">
                      <Form.Check required
                        label="For Place"
                        feedback="You must select before submitting."
                        feedbackType="invalid"
                      
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Check required
                        label="For Date"
                        feedback="You must select before submitting."
                        feedbackType="invalid"
                      
                      />
                    </Form.Group>
                    <Form.Control type="date"  feedback="You must select date."
                        feedbackType="invalid"/>
                    <Form.Range />
                    <Button type="submit">Submit form</Button>
                  </Form>
                </div>
                <div className="position_box2">
                  <div className="position_content">
                    <div className="position_content_box">
                      <div className="img_content_box">
                        <img src={'./images/malaysia.jpg'} alt="" />
                      </div>
                      <div className="position_content_text_box">
                        <div className="facility_box">
                          <h2>Trip Name</h2>
                          <Button variant="primary">
                            Profile <Badge bg="secondary">9</Badge>
                            <span className="visually-hidden">unread messages</span>
                          </Button>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                        </div>
                        <div className="bootrip_box text-center">
                          <Link>Book Trip</Link>
                        </div>
                      </div>
                    </div>
                    <div className="position_content_box">
                      <div className="img_content_box">
                        <img src={'./images/malaysia.jpg'} alt="" />
                      </div>
                      <div className="position_content_text_box">
                        <div className="facility_box">
                          <h2>Trip Name</h2>
                          <Button variant="primary">
                            Profile <Badge bg="secondary">9</Badge>
                            <span className="visually-hidden">unread messages</span>
                          </Button>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                        </div>
                        <div className="bootrip_box text-center">
                          <Link>Book Trip</Link>
                        </div>
                      </div>
                    </div>
                    <div className="position_content_box">
                      <div className="img_content_box">
                        <img src={'./images/malaysia.jpg'} alt="" />
                      </div>
                      <div className="position_content_text_box">
                        <div className="facility_box">
                          <h2>Trip Name</h2>
                          <Button variant="primary">
                            Profile <Badge bg="secondary">9</Badge>
                            <span className="visually-hidden">unread messages</span>
                          </Button>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                        </div>
                        <div className="bootrip_box text-center">
                          <Link>Book Trip</Link>
                        </div>
                      </div>
                    </div>
                    <div className="position_content_box">
                      <div className="img_content_box">
                        <img src={'./images/malaysia.jpg'} alt="" />
                      </div>
                      <div className="position_content_text_box">
                        <div className="facility_box">
                          <h2>Trip Name</h2>
                          <Button variant="primary">
                            Profile <Badge bg="secondary">9</Badge>
                            <span className="visually-hidden">unread messages</span>
                          </Button>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                          <Badge bg="secondary">Hotel</Badge>
                        </div>
                        <div className="bootrip_box text-center">
                          <Link>Book Trip</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Container>

        <Footer/>
    </div>
  )
}

export default Detailstrip