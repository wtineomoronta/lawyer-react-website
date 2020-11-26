import React, {Component} from 'react';
import {Footer} from './FooterComponent';
import Header from './HeaderComponent';
import Home from "./HomeComponent";
import Services from "./ServicesComponent";
import UseCases from "./UseCasesComponent";
import AboutUs from "./AboutUsComponent";
import ContactUs from "./ContactUsComponent";
import Faq from "./FaqComponent";
import WhatOurClientSaying from "./WhatOurClientAreSayingShare";

import {CLIENT_OPINIONS} from "../share/clientOpinions";
import {SERVICES} from "../share/services";
import {TEAM_MEMBERS} from "../share/teamMembers";
import {USE_CASES} from "../share/useCases";
import {FAQ} from "../share/faq";
import {Redirect, Route, Switch} from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clientOpinions: CLIENT_OPINIONS,
            services: SERVICES,
            teamMembers: TEAM_MEMBERS,
            useCases: USE_CASES,
            faq: FAQ
        };
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={() => <Home clientOpinions={this.state.clientOpinions}
                                                               useCases={this.state.useCases}
                                                               services={this.state.services}/>}/>
                    <Route exact path='/services' component={() => <Services services={this.state.services}/>}/>
                    <Route exact path='/usecases' component={() => <UseCases useCases={this.state.useCases}/>}/>
                    <Route exact path='/aboutus'
                           component={() => <AboutUs teamMembers={this.state.teamMembers}/>}/>
                    <Route exact path='/contactus' component={ContactUs}/>
                    <Route exact path='/faq' component={() => <Faq faq={this.state.faq}/>}/>
                    <Redirect to='/home'/>
                </Switch>
                <WhatOurClientSaying clientOpinions={this.state.clientOpinions}/>
                <Footer/>
            </div>
        );
    }
}

export default Main;