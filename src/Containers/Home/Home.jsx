// src/Containers/Home.js
import React, { useEffect, useState } from "react";
import { HomeNavbar, Card } from '../../Components';
import data from '../../Components/Card/Data.js'; // Adjust the path as necessary

const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Fetching data from JSON file
        setCards(data);
    }, []);

    return (
        <div className="Home">
            <HomeNavbar />
            <div className="cards-container">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        imgSrc={card.imgSrc}
                        imgAlt={card.imgAlt}
                        title={card.title}
                        description={card.description}
                        buttonText={card.buttonText}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
