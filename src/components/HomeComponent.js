import React from 'react';
import { RenderCardHomeComponent } from './CardComponent';
import RenderCorousel from "./Carousel";

function Home({ cards, carousel }) {
    return (
        <div>
            <RenderCorousel items={carousel} />
            <div className="container">
                <div className="row">

                    {cards.map(card => {
                        return (
                            <div className="col-md-4 d-flex align-items-stretch">
                                <RenderCardHomeComponent item={card} />
                            </div>
                        );
                    })
                    }

                </div>
            </div>
        </div>
    );
}

export default Home;   
