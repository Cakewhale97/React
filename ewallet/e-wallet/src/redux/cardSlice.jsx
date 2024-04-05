import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  activeCard: {
    id: 1,
    cardholder: "",
    cardnumber: "3556 3556 3556 3556",
    expiry: "1167",
    cvc: "141",
    issuer: "visa",
    active: true,
  },
  latestId: 1,
};

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

            // If there's an activeCard, add it to the cards array
            if (state.activeCard.id !== 1) {
                state.cards.push(state.activeCard);
            }

            // Set the activeCard to the new card
            state.activeCard = newCard;
        }
    },
    setActiveCard: (state, action) => {
        const cardId = action.payload;
        const cardIndex = state.cards.findIndex((card) => card.id === cardId);

        if (cardIndex !== -1) {
            // Store the current activeCard in a temporary variable
            const previousActiveCard = state.activeCard;

            // Set the activeCard to the selected card
            state.activeCard = state.cards[cardIndex];

            // Replace the selected card in the cards array with the previous activeCard
            state.cards[cardIndex] = previousActiveCard;
        }
    },
    },
});

export const { addCard, setActiveCard } = cardSlice.actions;
export default cardSlice.reducer;
