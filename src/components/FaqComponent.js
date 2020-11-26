import React from 'react';

const Faq = ({faq}) => {
    return (
        <div className="container" style={{marginTop: "95px"}}>
            <div className="row">
                <h1 style={{color: "tomato"}}>FAQ</h1>
            </div>

            <div className="row mt-3">
                {/*Rendering the questions and answers*/}
                {faq.map((item) => {
                    return (
                        <div key={item.id} className="col-9 mb-3">
                            <h3>{item.question}</h3>
                            <p>{item.answer}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Faq;