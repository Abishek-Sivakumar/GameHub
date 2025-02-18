import React, { useState } from "react";
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
  return (
    <div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="email">Game Name</label>
          <input type="text" id="name" name="name" required="" />
        </div>
        <div class="form-group">
          <label for="description">Your Review</label>
          <textarea
            name="description"
            id="description"
            rows="10"
            cols="50"
            required=""
          >
            {" "}
          </textarea>
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <select name="category" id="category">
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Souls-Like">Souls-Like</option>
            <option value="Sports">Adventure</option>
            <option value="Racing">Racing</option>
            <option value="Strategy">Strategy</option>
          </select>
        </div>
        <div class="form-group">
          <label for="company">Company</label>
          <input type="text" id="company" name="company" required="" />
        </div>
        <div class="form-group">
          <label for="releaseYear">Release year</label>
          <input
            type="number"
            id="releaseYear"
            name="releaseYear"
            required=""
          />
        </div>
        <div class="form-group">
          <label for="rating">Your Rating (?/10)</label>
          <input
            type="number"
            id="rating"
            name="rating"
            required=""
            min={1}
            max={10}
          />
        </div>
        <div class="form-group">
          <label for="rating">Upload a Picture</label>
          <input type="file" />
        </div>
        <button class="form-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddGame;
