import { createSlice } from "@reduxjs/toolkit";

const storedCards = JSON.parse(localStorage.getItem("cards")) || [];
const defaultCard = {
    id: 1,
    cardholder: "",
    cardnumber: "3556 3556 3556 3556",
    expiry: "1167",
    cvc: "141",
    issuer: "visa",
    active: true,
};

const initialState = {
    cards: storedCards,
    activeCard: storedCards.length > 0 ? storedCards[0] : defaultCard,
    latestId: storedCards.length > 0 ? storedCards[storedCards.length - 1].id : 1,
};
  
// localStorage.clear();
console.log("initialState", initialState);

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
        if (state.cards.length === 4) {
            alert("Could not add another card");
        } else {
            state.latestId += 1;
            const newCard = { ...action.payload, id: state.latestId };

            // Check if a card with the same details already exists in the state
            const existingCardIndex = state.cards.findIndex((card) =>
                card.cardholder === newCard.cardholder &&
                card.cardnumber === newCard.cardnumber &&
                card.expiry === newCard.expiry &&
                card.cvc === newCard.cvc &&
                card.issuer === newCard.issuer
            );

            // If the card doesn't exist, add it to the state and set it as the active card
            if(existingCardIndex === -1) {
                state.cards.push(newCard);
                state.activeCard = newCard;
            }

            // Update local storage
            localStorage.setItem(
                "cards",
                JSON.stringify([...state.cards])
            );
        }
    },
    setActiveCard: (state, action) => {
        const cardId = action.payload;
        const cardIndex = state.cards.findIndex((card) => card.id === cardId);

        if (cardIndex !== -1) {
            // Set the activeCard to the selected card
            state.activeCard = state.cards[cardIndex];

            // Update local storage
            localStorage.setItem(
                "cards",
                JSON.stringify([...state.cards])
            );
        }
    },
  },
});

export const { addCard, setActiveCard } = cardSlice.actions;
export default cardSlice.reducer;
