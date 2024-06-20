import {Row, Col,Container} from 'react-bootstrap';

import './Footer.css';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';

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
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='newsForm'>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Mail Id" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Email.
                    </Form.Control.Feedback>
                </Form.Group>
                <button type='submit'>Subscribe</button>
            </Form>
            <Container>

                <Row>
                    <Col md={4} className='footer_content'><h1>1</h1></Col>
                    <Col md={4} className='footer_content'><h1>2</h1></Col>
                    <Col md={4} className='footer_content'><h1>3</h1></Col>
                </Row>
            </Container>
        </div>

    </div>
  )
}

export default Footer