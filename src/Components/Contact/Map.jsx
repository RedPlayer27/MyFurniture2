import React from 'react'
import './Map.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Map() {
    return (
        <div>
            <div className='container'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.22897574547!2d72.7141289572438!3d19.082806702154134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v4617218989899!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mumbai Location"
                ></iframe>
            </div>
            <div className=' container wed'>
                <div className="row">
                    <div className=' col-xl-4 mon1'>
                        <h2 className='uni1'>Contact Info</h2>

                        <div className='toni'>
                            <h3 >Phone:</h3>
                            <div className='uni1'>
                                <p>+012 345 678 102</p>
                                <p>+012 345 678 102</p>
                            </div>
                        </div>
                        <div className='toni'>
                            <h3 >Email:</h3>
                            <div className='uni1'>
                                <p>email@here.com</p>
                                <p>your@email.here</p>
                            </div>
                        </div>
                        <div className='toni'>
                            <h3 className=''>Address:</h3>
                            <div className='uni1'>
                                <p>Address goes here,</p>
                                <p>street, Crossroad 123.</p>
                            </div>
                        </div>
                    </div>
                    <div className=' col-xl-8 mon1'>
                        <h2 className='uni1'>Get In Touch</h2>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="password" placeholder="" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control placeholder="" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Message</Form.Label>

                                <textarea rows="8" id="message" name="message" label="Message" class="sc-ezrnTI fmHJuB"></textarea>
                            </Form.Group>
                            <Button variant="primary" type="submit" className='hOt1'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map