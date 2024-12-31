import React, { useState } from "react";
import './Joke.css'

const JokeApp = () => {
    const [joke, setJoke] = useState("");

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };

    return (
        <div className="joke-container">
            <h1 className="joke-title">Joke Generator using React</h1>
            <p className="joke-text">{joke}</p>
            <button className="joke-button" onClick={fetchApi}>
                Click here
            </button>
        </div>
    );
};

export default JokeApp;
