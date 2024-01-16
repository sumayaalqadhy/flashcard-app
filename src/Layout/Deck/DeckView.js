import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api/index.js";
import CardList from "../Cards/CardList.js";
import NotFound from "../Shared/NotFound.js";

import "./DeckView.css";

function DeckView() {
    const deckId = useParams().deckId; 
    const [deck, setDeck] = useState({})
    useEffect(() => {
        async function loadDeck() {
            const response = await readDeck(deckId);
            setDeck(response);
        }
        loadDeck();
    }, [deckId])

    if (deck.id) {
        return (
            <div>
                <CardList deck={deck} />
                {deck.cards.length === 0 && 
                    <h4 style={{ textAlign: "center" }}>Add more cards to study!</h4>
                }
            </div>
        );
    }
    return <NotFound />

}

export default DeckView;