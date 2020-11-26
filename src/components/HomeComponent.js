import React, {Component} from 'react';
import {Button, Card, CardImg, CardSubtitle, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <div style={{marginTop: "70px"}}>
                {/*Create a component for this*/}
                <div className="p-2"
                     style={{backgroundImage: `url("assets/services-unsplash.jpg")`}}>{/*style={{background:"tomato"}}*/}
                    <div className="container mt-3" color="primary" style={{height: "300px"}}>
                        <div className="row justify-content-center">
                            <h2>Lorem ipsum dolorsit amet, consectetur adipiscing</h2>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <Link to="/contactus" style={{color: "tomato"}}>
                                <h5>Contact Us</h5>
                            </Link>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <Link to="/contactus">
                                <Button color="primary" outline>Free Consultation</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <WhatWeOffer services={this.props.services}/>
                <WonCases wonCase={this.props.useCases[0]}/>
            </div>
        );
    }
}

const WhatWeOffer = ({services}) => {
    return (
        <div style={{background: "rgb(192, 192, 192)"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className="mt-3">What we offer</h2>
                </div>
                <div className="row">

                    <div className="col-lg-4 col-md-6 mb-4">
                        <Link to="/services">
                            <Card key={1} className="pb-3" style={{height: "459px"}}>
                                <CardImg top width="100%" height="350px" src={services[0].image}
                                         alt={services[0].name}></CardImg>
                                <CardTitle className="pl-3 text-uppercase" tag="h3">{services[0].name}</CardTitle>
                                <CardSubtitle className="pl-3 text-capitalize"
                                              tag="h6">{services[0].slogan}</CardSubtitle>

                            </Card>
                        </Link>
                    </div>


                    <div className="col-lg-4 col-md-6 mb-4">
                        <Link to="/services">
                            <Card key={1} className="pb-3" style={{height: "459px"}}>
                                <CardImg top width="100%" height="350px" src={services[1].image}
                                         alt={services[0].name}></CardImg>
                                <CardTitle className="pl-3 text-uppercase" tag="h3">{services[1].name}</CardTitle>
                                <CardSubtitle className="pl-3 text-capitalize"
                                              tag="h6">{services[1].slogan}</CardSubtitle>

                            </Card>
                        </Link>
                    </div>

                    <Link to="/services">
                        <div className="flex-column d-flex position-relative justify-content-center text-center"
                             style={{background: "#6610f2", width: "320px", height: "459px"}}>
                            <h3 style={{color: "#FFF"}}>SEE ALL AREAS ></h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

const WonCases = ({wonCase}) => {
    return (
        <div className="mt-2 mb-3 p-5">
            <div className="container">
                <div className="row justify-content-center">
                    <h3>Won Cases</h3>
                </div>
                <div className="row justify-content-center mt-3">
                    <h5>{wonCase.name}</h5>
                </div>
                <div className="row justify-content-center">
                    <p className="text-center">
                        {wonCase.description}
                    </p>
                </div>
                <div className="row justify-content-end">
                    <Link to="/usecases">Read more...</Link>
                </div>
            </div>

        </div>
    );
}
export default Home;