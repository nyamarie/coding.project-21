import React, { useState, useEffect } from 'react';

const App = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTours = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://course-api.com/react-tours-project');
                const data = await response.json();
                setTours(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching tours:', error);
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1>Tours</h1>
            <ul>
                {tours.map((tour) => (
                    <li key={tour.id}>{tour.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;

// The state for error is already managed in the fetchTours function.
// No additional code is needed at $PLACEHOLDER$ since the error handling is already implemented.

// No additional code is needed here as the loading state is already handled in the component's return statement.
if (!loading && tours.length === 0) {
    return <h2>Error fetching tours. Please try again later.</h2>;
}
return (
    <div>
        <h1>Tour Gallery</h1>
        <div className="gallery">
            {tours.map((tour) => (
                <div key={tour.id} className="tour-card">
                    <h2>{tour.name}</h2>
                    <img src={tour.image} alt={tour.name} />
                    <p>{tour.info}</p>
                    <p>Price: ${tour.price}</p>
                </div>
            ))}
        </div>
    </div>
);

if (!loading && tours.length === 0) {
    return (
        <div>
            <h2>No tours left</h2>
            <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
    );
}