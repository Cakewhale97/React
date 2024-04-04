//Create slice is a function that automatically generates action creator and action types based on the reducers and state you define.
//CreateAsyncThunk simplifies the use of asynchronous actions in redux. it acceptes a redux action type string and a function that returns a promise, and generates a thunk that dispatches pending, fulfilled and rejected action types based on that promise.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [
      {
        id: 1,
        cardholder: "",
        cardnumber: "3556 3556 3556 3556",
        expiry: "1167",
        cvc: "141",
        issuer: "visa",
        active: true,
      },
    ],
    latestId: 2,
  },
  reducers: {
    addCard: (state, action) => {
      //This reducer checks if the number of cards is already 4. if its it sends an alert other wise it adds the new card from action.payload to the cards array and increments latest id. I know that we are not supposed to have a limit on how many cards we can add, but im trying something new. Most likley will be changed later on.
      if (state.cards.length === 4) {
        alert("Could not add another card");
      } else {
        state.cards = state.cards.concat(action.payload);
        state.latestId += 1;
      }
    },
    setActiveCard: (state, action) => {
      //iterates over each card in the cards array in the state. It then sets the active property of each card to false. no active cards
      state.cards.forEach((card) => {
        card.active = false;
      });
      // Removes the card with the id that matches the action.payload.id from the cards array. filer function returns a new array that includes only the cards whose id does not match action payload.
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
      // adds the card from action.payload to the end of the cards array.
      state.cards.push(action.payload);
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

export const { setActiveCard, addCard, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;