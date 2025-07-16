document.addEventListener('DOMContentLoaded', () => {
    const jokeDisplay = document.getElementById('jokeDisplay');
    const fetchJokeBtn = document.getElementById('fetchJokeBtn');
    const errorDisplay = document.getElementById('errorDisplay');

    const API_URL = 'https://icanhazdadjoke.com/'; // A public API for dad jokes

    async function fetchDadJoke() {
        jokeDisplay.textContent = 'Loading joke...';
        errorDisplay.textContent = ''; // Clear previous errors

        try {
            const response = await fetch(API_URL, {
                headers: {
                    'Accept': 'application/json' // Request JSON format
                }
            });

            if (!response.ok) {
                // If response is not 2xx, throw an error
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            jokeDisplay.textContent = data.joke; // Display the joke
        } catch (error) {
            console.error('Error fetching joke:', error);
            errorDisplay.textContent = 'Failed to fetch joke. Please try again later.';
            jokeDisplay.textContent = 'Sorry, no joke available.';
        }
    }

    // Add event listener to the button
    fetchJokeBtn.addEventListener('click', fetchDadJoke);

    // Optionally, fetch a joke when the page loads
    fetchDadJoke();
});