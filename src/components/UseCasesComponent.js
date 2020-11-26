import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

const RenderUseCase = ({useCases}) => {
    return useCases.map((useCase) => {
        return (
            <div className="col-lg-6 mb-4">
                <Card key={useCase.id}>
                    <CardImg top with="100%" height="350px" src={useCase.image} alt={useCase.name}></CardImg>
                    <CardSubtitle className="pl-3 mt-2 text-capitalize">{useCase.place}</CardSubtitle>
                    <CardTitle className="pl-3 text-uppercase" tag="h3">{useCase.name}</CardTitle>
                    <CardBody>
                        <CardText>{useCase.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    });
}

const UseCases = ({useCases}) => {
    return (
        <div style={{marginTop: "70px"}}>
            <div style={{
                backgroundImage: `url("assets/building-unsplash.png")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container">
                    <div className="row mb-3 align-content-end" style={{height: "305px"}}>
                        <h1 className="p-2" style={{
                            color: "tomato", backgroundColor: 'rgba(245, 245, 245, 1)',
                            opacity: '.8'
                        }}>USE CASES</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <RenderUseCase useCases={useCases}/>
                </div>
            </div>
        </div>
    );
}
export default UseCases;