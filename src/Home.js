import React, { useState } from 'react';

function HomePage() {
    // State to store the Steam ID input value
    const [steamId, setSteamId] = useState('');

    // Function to handle changes in the input field
    const handleSteamIdChange = (e) => {
        setSteamId(e.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // You can perform any actions with the Steam ID here, like fetching CS:GO stats
        // For now, let's just log it to the console
        console.log('Steam ID submitted:', steamId);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>CS:GO Stats App</h1>
                <p>Enter your Steam ID to view your CS:GO stats:</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Steam ID"
                        value={steamId}
                        onChange={handleSteamIdChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </header>
        </div>
    );
}

export default HomePage;
