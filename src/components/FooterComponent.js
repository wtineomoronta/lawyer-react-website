import React from 'react';
import {Link} from 'react-router-dom';

export const Footer = () => {
    return (
        <div>
            <div style={{background: "gray"}} className="p-3">
                <div className="container">
                    <div className="row justify-content-around">
                        {/*Call Us*/}
                        <div className="col-md-3 text-center mt-2">
                            <div className="align-content-center" style={{height: "75px", background: "white"}}>
                                <h3>Lawyer
                                    Office</h3></div>
                            <br/>
                            <h5>Call us</h5>
                            <span>Tel: 809-342-3243</span>
                            <br/>
                            <span>Cel: 829-434-2343</span>
                        </div>

                        {/*Location*/}
                        <div className="col-md-2 mt-2 ml-5">
                            <h4>Location</h4>
                            <span>
                                Lorem ipsum ipsum
                                234 ipsum
                                Ipsum, Lorem
                            </span>
                        </div>

                        {/*Quick Links*/}
                        <div className="col-sm-3 mt-2 ml-3">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/usecases">Use Cases</Link></li>
                                <li><Link to="/aboutus">About us</Link></li>
                                <li><Link to="/contactus">Contact Us</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                            </ul>
                        </div>

                        {/*Follow Us*/}
                        <div className="col-sm-3 mt-2">
                            <h5>Follow Us</h5>
                            <a className="btn btn-social-icon btn-facebook mr-1" href="/">
                                <i className="fa fa-facebook"/>
                            </a>
                            <a className="btn bnt-social-icon btn-linkedin mr-1" href="/">
                                <i className="fa fa-linkedin"/>
                            </a>
                            <a className="btn bnt-social-icon btn-twitter mr-1" href="/">
                                <i className="fa fa-linkedin"/>
                            </a>
                            <a className="btn bnt-social-icon btn-linkedin mr-1" href="/">
                                <i className="fa fa-twitter"/>
                            </a>
                            <a className="btn bnt-social-icon" href="mailto:">
                                <i className="fa fa-envelope-o"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{background: "black"}}>
                <div className="container mb-2">
                    <div className="row justify-content-around">
                        <p style={{color: "white"}}>© Copyright 2020 Lawyer Office</p>
                        <p style={{color: "white"}}>Created by: WTM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}