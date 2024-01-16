import React from "react";
import { deleteDeck } from "../../../utils/api";

function DeleteDeckButton({ deckId }) {

    const handleDelete = async (event) => {
        event.preventDefault();
        await deleteDeck(deckId);
        window.location.reload();
    }
    return <button
        className="btn btn-danger"
        style={{ float: 'right', marginRight: '50px' }}
        onClick={handleDelete}>
        Delete
    </button>
}

export default DeleteDeckButton;