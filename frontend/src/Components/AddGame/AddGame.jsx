import React, { useState } from "react";
import axios from "axios";
import "./AddGame.css";

function AddGame() {
  const [game, setGame] = useState({
    name: "",
    review: "",
    category: "",
    company: "",
    releaseYear: "",
    rating: "",
  });

  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGame((prevGame) => ({ ...prevGame, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", image);
    formData.append(
      "games",
      new Blob([JSON.stringify(game)], { type: "application/json" })
    );

    axios
      .post("http://localhost:8080/games", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Game Added Successfully : ", response.data);
        alert("Game added successfully");
      })
      .catch((error) => {
        console.log("Error in adding Game", error);
        alert("Error adding game");
      });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Game Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required=""
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">Your Review</label>
          <textarea
            name="review"
            id="review"
            rows="10"
            cols="50"
            required=""
            onChange={handleInputChange}
          >
            {" "}
          </textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={handleInputChange}>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Souls-Like">Souls-Like</option>
            <option value="Sports">Sports</option>
            <option value="Racing">Racing</option>
            <option value="Strategy">Strategy</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            required=""
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="releaseYear">Release year</label>
          <input
            type="number"
            id="releaseYear"
            name="releaseYear"
            required=""
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Your Rating (?/10)</label>
          <input
            type="number"
            id="rating"
            name="rating"
            required=""
            min={1}
            max={10}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Upload a Picture</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button className="form-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddGame;
