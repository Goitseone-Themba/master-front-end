import React from "react"
import "./restaurantReservation.css"
import heart from "./assets/heart.svg"
import restaurant from "./assets/restaurant.jpg"

export const RestaurantReservation = () => {
    return (
        <>
            <div id="main-container" className="main-container">
                <div id="card-container" className="card-container">
                    <div id="img-container" className="img-container">
                        <img className="img-restaurant" src={restaurant} alt="picture of a restaurant" />
                    </div>
                    <div id="title" className="title">
                        <ul id="left-title" className="left-title">
                            <li className="name">Gramercy Tarven</li>
                            <li className="venue">20th St New York</li>
                            <li>
                                <div className="rating">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span> &#40 231 reviews &#41</span>
                                </div>
                            </li>
                        </ul>
                        <div id="right-title" className="right-title">
                            <img className="like" src={heart} alt="like button" />
                        </div>
                    </div>
                    <div id="description" className="description">
                        <p>
                            A quintessential New York City gem among the city's iconic establishments, Geramercy Tavern
                            serves as an extraordinary destination for special occasions and an elevated version of an
                            everyday retreat. It's the unique kind of place you choose for a celebration after a joyful
                            engagement, or casually wander into to seek refuge from an unexpected downpour.
                        </p>
                    </div>
                    <button id="reserve-btn" className="reserve-btn">
                        Make a reservation
                    </button>
                </div>
            </div>
        </>
    )
}
