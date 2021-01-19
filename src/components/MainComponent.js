import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from './HomeComponent';
import Contact from "./ContactComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
import { CARDS } from "../shared/cards";
import { COLLAPSE } from "../shared/collapse";


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: CARDS,
            carousel: CAROUSEL,
            collapse: COLLAPSE
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    cards={this.state.cards.filter(card => card.homeComponent)}
                    carousel={this.state.carousel.filter(itemCarousel => itemCarousel.homeComponent)}
                    collapse={this.state.collapse.filter(itemCollapse => itemCollapse.homeComponent)}
                />
            );
        };

        const ShopPage = () => {
            return (
                <div />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}



export default Main;
