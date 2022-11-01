import {useState, useEffect} from "react";
import "./Jokes.scss";
import Norris from "../../assets/chucky.png";

const Jokes = () => {

  const url = "https://api.chucknorris.io/jokes/random";

  const [isLoading, setIsLoading] = useState(true)
  const [joke, setJoke] = useState({})

  async function getJoke() {
    setIsLoading(true)
    const response = await fetch(url);
    const data = await response.json();
    setJoke(data);
    setIsLoading(false);
  }


  useEffect(() => {
    setTimeout(() => {
      getJoke();
    }, 2200);
  }, [])



  return (
    <section className="jokes-sec --center-all">
      <div className="container joke --bg-light --card">
        <h2>Random Jokes Generator</h2>
        <img src={Norris} alt="smiley" className="smiley"/>
        <hr />
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <p className="--my2">{joke.value}</p>
        )}

        <hr />
        <button onClick={getJoke} className="--btn --btn-primary --btn-block">Generate New Joke</button>
      </div>
    </section>
  );
};

export default Jokes;

//
