import React from 'react';

const WhatOurClientSaying = ({clientOpinions}) => {
    return (
        <div style={{background: "#C0C0C0"}} className="p-4">
            <div className="container">
                <div className="row justify-content-center mb-2">
                    <h3>What our clients are saying</h3>
                </div>
                <div className="row justify-content-center p-4" style={{background: "tomato"}}>
                    <p>
                        {clientOpinions[0].comment}
                    </p>
                    <strong><p>{clientOpinions[0].author}</p></strong>
                </div>

                <div className="row justify-content-between p-4">
                    <div className="col-md-4 col-12">
                        <span>
                            <strong>{clientOpinions[0].author}</strong>. {clientOpinions[0].comment}<br/>
                        </span>
                    </div>
                    <div className="col-md-4 col-12">
                        <span>
                            <strong>{clientOpinions[0].author}</strong>. {clientOpinions[0].comment}<br/>
                        </span>
                    </div>
                    <div className="col-md-4 col-12">
                        <span>
                            <strong>{clientOpinions[0].author}</strong>. {clientOpinions[0].comment}<br/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatOurClientSaying;