import React from 'react';
import './TourCard.css';

const TourCard = ({ name, info, image, price }) => {
    return (
        <div className="tour-card">
            <img src={image} alt={name} className="tour-card-image" />
            <div className="tour-card-content">
                <h2 className="tour-card-name">{name}</h2>
                <p className="tour-card-info">{info}</p>
                <p className="tour-card-price">${price}</p>
            </div>
        </div>
    );
};

export default TourCard;

import React, { useState } from 'react';

const TourCard = ({ name, info, image, price }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleRemove = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="tour-card">
            <img src={image} alt={name} className="tour-card-image" />
            <div className="tour-card-content">
                <h2 className="tour-card-name">{name}</h2>
                <p className="tour-card-info">{info}</p>
                <p className="tour-card-price">${price}</p>
                <button className="tour-card-button" onClick={handleRemove}>
                    Not Interested
                </button>
            </div>
        </div>
    );
};

export default TourCard;