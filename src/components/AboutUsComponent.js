import React from 'react';
import {Card, CardBody, CardHeader, Media} from "reactstrap";

const RenderTeamMember = ({teamMembers}) => {
    return teamMembers.map((member) => {
        return (
            <div key={member.id} className="col-12 mt-5">
                <Media tag="li">
                    <Media left middle>
                        <Media object src={member.image} alt={member.name} style={{widht: "200px", height: "200px"}}/>
                    </Media>
                    <Media body className="ml-3">
                        <Media heading className="text-capitalize">{member.name}</Media>
                        <p className="text-capitalize"><strong>{member.designation}</strong></p>
                        <p>{member.description}</p>
                    </Media>
                </Media>
            </div>
        );
    });

}

const AboutUs = ({teamMembers}) => {
    return (
        <div>
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
                        }}>ABOUT US</h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row row-content justify-content-between">
                    <div className="col-12 col-md-6">
                        <h3>Our History</h3>
                        <p>
                            Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad
                            putent
                            delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant
                            dolorum
                            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu
                            dicat
                            falli consulatu at vis.</p>
                        <p>
                            Te facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui
                            tation
                            efficiendi in eos. Ei mea falli legere efficiantur et tollit aliquip debitis mei.
                        </p>
                        <p>
                            No deserunt mediocritatem mel. Lorem ipsum dolor sit amet et delectus accommodare his consul
                            copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an
                            brute
                            copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum
                            moderatius
                            cu.
                            Sit munere facilis accusam eu dicat falli consulatu at
                        </p>
                    </div>
                    <div className="col-12 col-md-5">
                        <Card>
                            <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">Started</dt>
                                    <dd className="col-6">3 Feb. 2013</dd>
                                    <dt className="col-6">Major Stake Holder</dt>
                                    <dd className="col-6">HK Fine Foods Inc.</dd>
                                    <dt className="col-6">Last Year's Turnover</dt>
                                    <dd className="col-6">$1,250,375</dd>
                                    <dt className="col-6">Employees</dt>
                                    <dd className="col-6">40</dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                </div>

                {/*Render team members*/}
                <div className="row mb-4">
                    <h3>Our Team</h3>
                    {/*create a arrow function to render this from a JSON*/}
                    <RenderTeamMember teamMembers={teamMembers}/>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;