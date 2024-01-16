import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function AddCardButton({ deckId }) {
    const { url } = useRouteMatch();

    return (
        <button type="button" name="create-card" className="btn btn-dark" style={{ marginLeft: '10px', color: '#FFF' }}>
            {url === `/decks/${deckId}/study` ?
                <Link to={`/decks/${deckId}/cards/new`} style={{ color: '#FFF' }}>
                    Add Card
                </Link> :
                <Link to={`${deckId}/cards/new`} style={{ color: '#FFF' }}>
                    Add Card
                </Link>
            }
        </button>
    )
}

export default AddCardButton;

