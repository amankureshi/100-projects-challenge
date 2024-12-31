import React from 'react'

const JokeGen = () => {
    const [Joke, setJoke] = React.useState("");
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
    };
    return (
        <div>
            <div className="joke">

            </div>
        </div>
    )
}

export default JokeGen