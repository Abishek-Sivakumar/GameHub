import React, { useEffect } from "react";
import "./Home.css";
import axios from "axios";

function Home() {
  const [games, setGames] = React.useState([]);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    const result = await axios.get("http://localhost:8080/games");
    console.log(result.data);
    setGames(result.data);
  };

  const gamesEl = games.map((game) => {
    return (
      <div className="card" key={game.id}>
        <div className="card-image-container">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
            stroke-width="0"
            fill="currentColor"
            stroke="currentColor"
            className="image-icon"
          >
            <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z"></path>
          </svg> */}
          <div className="card-image-container">
            {game.imageName ? (
              <img
                src={`http://localhost:8080/games/image/${game.id}`}
                alt={game.name}
                className="game-image"
              />
            ) : (
              <p>No Image Available</p>
            )}
          </div>
        </div>
        <p className="card-title">{game.name}</p>
        <p className="card-des">Rated {game.rating}/10</p>
        <p className="card-des">{game.category}</p>
      </div>
    );
  });

  return (
    <>
      <div className="home-container">{gamesEl}</div>
    </>
  );
}

export default Home;
