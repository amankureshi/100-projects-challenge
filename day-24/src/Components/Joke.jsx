import React from 'react'

const Joke = () => {
    const [Joke, setJoke] = React.useState("");

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };
    return (
        <div>
            <div className="joke">
                <button>Click here</button>
                <p>{Joke}</p>
            </div>
        </div>
    )
}

export default Joke
