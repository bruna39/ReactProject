import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from './HomeComponent';
import Contact from "./ContactComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
import { CARDS } from "../shared/cards";
import { CAROUSEL } from "../shared/carousel";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: CARDS,
            carousel: CAROUSEL
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    cards={this.state.cards.filter(card => card.homeComponent)}
                    carousel={this.state.carousel.filter(itemCarousel => itemCarousel.homeComponent)}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}



export default Main;
