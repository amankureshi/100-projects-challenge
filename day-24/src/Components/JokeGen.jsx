import React from 'react'

const JokeGen = () => {
    const [Joke, setJoke] = React.useState("");
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.Joke));
    };
    return (
        <div>
            <div className="joke">
            </div>
        </div>
    )
}

export default JokeGen