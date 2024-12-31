import React from 'react'
import Button from './Button';

const JokeGen = () => {
    const [Joke, setJoke] = React.useState("");
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };
    return (
        <div>
            <div className="joke">
                <p>{Joke}</p>
                <Button callApi={fetchApi} />
            </div>
        </div>
    )
}

export default JokeGen