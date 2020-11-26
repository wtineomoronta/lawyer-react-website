import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

const RenderService = ({services}) => {
    return services.map((service) => {
        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <Card key={service.id}>
                    <CardImg top width="100%" height="350px" src={service.image} alt={service.name}></CardImg>
                    <CardTitle className="pl-3 text-uppercase" tag="h3">{service.name}</CardTitle>
                    <CardSubtitle className="pl-3 text-capitalize" tag="h6">{service.slogan}</CardSubtitle>
                    <CardBody>
                        <CardText>{service.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    });
};

const Services = ({services}) => {
    return (
        <div style={{marginTop: "70px"}}>
            <div style={{
                backgroundImage: `url("assets/services-unsplash.png")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container">
                    <div className="row mb-3 align-content-end" style={{height: "305px"}}>
                        <h1 className="p-2" style={{
                            color: "tomato", backgroundColor: 'rgba(245, 245, 245, 1)',
                            opacity: '.8'
                        }}>OUR SERVICES</h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-4">
                    {<RenderService services={services}/>}
                </div>
            </div>
        </div>
    );
}

export default Services;