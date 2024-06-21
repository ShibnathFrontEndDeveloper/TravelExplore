import {Row, Col,Container} from 'react-bootstrap';

import './Footer.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaFacebook, FaSquareInstagram, FaLinkedin, FaYoutube, FaSquarePinterest   } from "react-icons/fa6";

function Footer() {
    const [validated, setValidated] = useState(false)
    const handleSubmit =(event)=>{
        const form = event.currentTarget;
        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }
  return (
    <div>
        <div className="footer">
            <Container>
                <div className="footer_content">
                    <Row>
                        <Col md={3} className='footer_content'>
                            <h1>Company Details</h1>
                            <p className='companyDtls'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laboriosam hic quod sunt delectus dicta ab tempora at sapiente, laborum dolorem accusamus dolores iste doloremque nostrum tenetur exercitationem fugit corporis!</p>
                        </Col>
                        <Col md={3} className='footer_content'>
                            <h1>Essential Links</h1>
                            <ul>
                                <li><Link>Travel Landing Page 1</Link></li>
                                <li><Link>Travel Landing Page 2</Link></li>
                                <li><Link>Travel Landing Page 3</Link></li>
                                <li><Link>Travel Landing Page 4</Link></li>
                                <li><Link>Travel Landing Page 5</Link></li>
                                <li><Link>Travel Landing Page 6</Link></li>
                            </ul>
                        </Col>
                        <Col md={3} className='footer_content'>
                            <h1>Essential Links</h1>
                            <ul>
                                <li><Link>Travel Landing Page 1</Link></li>
                                <li><Link>Travel Landing Page 2</Link></li>
                                <li><Link>Travel Landing Page 3</Link></li>
                                <li><Link>Travel Landing Page 4</Link></li>
                                <li><Link>Travel Landing Page 5</Link></li>
                                <li><Link>Travel Landing Page 6</Link></li>
                            </ul>
                        </Col>
                        <Col md={3} className='footer_content'>
                            <h1>Essential Links</h1>
                            <ul>
                                <li><Link>Travel Landing Page 1</Link></li>
                                <li><Link>Travel Landing Page 2</Link></li>
                                <li><Link>Travel Landing Page 3</Link></li>
                                <li><Link>Travel Landing Page 4</Link></li>
                                <li><Link>Travel Landing Page 5</Link></li>
                                <li><Link>Travel Landing Page 6</Link></li>
                            </ul>
                        </Col>
                        <Col md={6} className='footer_content socialLinks'>
                            <h1>Social Links</h1>
                            <ul>
                                <li><Link><FaFacebook/></Link></li>
                                <li><Link><FaSquareInstagram/></Link></li>
                                <li><Link><FaLinkedin /></Link></li>
                                <li><Link><FaYoutube /></Link></li>
                                <li><Link><FaSquarePinterest/></Link></li>
                            </ul>
                        </Col>
                        <Col md={6} className='footer_content'>
                            <Form noValidate validated={validated} onSubmit={handleSubmit} className='newsForm'>
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    <Form.Control type="email" placeholder="Mail Id" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <div className="text-center">
                                    <button type='submit'>Subscribe</button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="lower_footer">
                <Container>
                    <Col>
                        <Row>
                            <Col md={6}>
                                <p>@Reserve all rights</p>
                            </Col>
                            <Col md={6}>
                                <p>Design & Development By:<Link>Websolveinfo</Link></p>
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </div>
        </div>

    </div>
  )
}

export default Footer