import React from "react";
import { Link } from "react-router-dom";
import "./CreateDeckButton.css";

function CreateDeckButton() {
  return (
    <div className="button">
      <Link to="/decks/new" className="button-link">
        <button type="submit" className="btn btn-lg custom-btn">
          Create Deck
        </button>
      </Link>
    </div>
  );
}

export default CreateDeckButton;

