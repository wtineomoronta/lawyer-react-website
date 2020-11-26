import React from 'react';
import {Control, Errors, LocalForm} from "react-redux-form";
import {Button, Card, Col, Label, Row} from "reactstrap";

const ContactUs = () => {
    return (
        <div className="container mb-3" style={{marginTop: "100px"}}>
            <div className="row">
                <h1>CONTACT US</h1>
            </div>

            <div className="row align-content-between mt-5">
                {/*Contact Info*/}
                <ContactInfo/>
                <ContactForm/>
            </div>

        </div>
    );
}

const ContactInfo = () => {
    return (
        <div className="col-12 col-lg-5 mb-5">
            <h3>Contact Information</h3>
            <address>
                343 Stand Street St #30,<br/>
                Miami, FL 44654 <br/><br/>

                <i className="fa fa-phone"/> : 856-044-4323 <br/>
                <i className="fa fa-whatsapp"/> : 856-044-4323 <br/>
                <i className="fa fa-fax"/> : 984-434-3243 <br/>
                <i className="fa fa-envelope"/><a href="mailto:info@domain"> info@domain.com</a>

            </address>
            <h5 style={{color: "tomato"}}>Business Ours</h5>
            Monday to Friday - 8:00 A.M to 5:00 P.M.
        </div>
    );

}

// Necessary form validation
const required = (value) => value && value.length;
const minLength = (length) => (value) => value && (value.length > length);
const validMail = (value) => /^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

const ContactForm = (resetContactForm) => {

    return (
        <div className="col-12 col-lg-7">
            <Card className="pt-3 pr-4 pl-4">
                <h3>Get Your Free Consultation or Contact Us</h3>

                <LocalForm onSubmit={(values) => {
                    alert(JSON.stringify(values));
                }}>
                    <Row className="form-group">
                        <Label htmlFor="firstname" md={12}>First Name</Label>
                        <Col md={12}>
                            <Control.text  // eslint-disable-next-line
                                model=".firstname"
                                id="firstname"
                                name="firstname"
                                placeholder="First Name"
                                className="form-control"
                                validators={{
                                    required,
                                    minLength: minLength(3),
                                }}/>

                            <Errors model=".firstname"
                                    className="text-danger"
                                    show="touched"
                                    messages={{
                                        required: "Required",
                                        minLength: "Must be greater than 2 characters"
                                    }}/>
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Label htmlFor="email" md={12}>Email</Label>
                        <Col md={12}>
                            <Control.text model=".email"  // eslint-disable-next-line
                                          id="email"
                                          name="email"
                                          placeholder="email@domain.com"
                                          className="form-control"
                                          validators={{
                                              validMail
                                          }}/>

                            <Errors model=".email"
                                    className="text-danger"
                                    show="touched"
                                    messages={{
                                        validMail: "Invalida e-mail address"
                                    }}/>
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Label htmlFor="phone" md={12}>Phone</Label>
                        <Col md={12}>
                            <Control.text model=".phone"  // eslint-disable-next-line
                                          id="phone"
                                          name="phone"
                                          placeholder="809-123-4321"
                                          className="form-control"
                                          validators={{required}}/>

                            <Errors model=".phone"
                                    className="text-danger"
                                    show="touched"
                                    messages={{required: "You must supply a phone number"}}/>
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Label htmlFor="comment" md={12}>Question or Comment</Label>
                        <Col md={12}>
                            <Control.textarea model=".comment"  // eslint-disable-next-line
                                              id="comment"
                                              name="comment"
                                              placeholder="Write your question or comment"
                                              className="form-control"
                                              validators={{
                                                  required,
                                                  minLength: minLength(16)
                                              }}/>
                            <Errors model=".comment"
                                    className="text-danger"
                                    show="touched"
                                    messages={{
                                        required: "Required",
                                        minLength: "Must be greater than 15 characters"
                                    }}/>
                        </Col>
                    </Row>

                    <Row className="form-group text-center">
                        <Col md={12}>
                            <Button type="submit" color="primary" className="mr-4">Send</Button>
                            <Button type="reset" color="primary" outline>Cancel</Button>
                        </Col>
                    </Row>
                </LocalForm>
            </Card>
        </div>
    );
}

export default ContactUs;