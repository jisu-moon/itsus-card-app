import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCardsData } from './cards-actions';

export interface ICards {
  [key: string]: {
    title?: string;
    summary?: string;
    subSummary?: string;
    price?: string;
  };
}
export interface IState {
  status: string;
  cards: ICards;
}

interface IUpdateAction {
  payload: {
    value?: string;
    index: string;
    option: string;
    prevValue?: string;
  };
}

const initialState = {
  status: 'pending',
  cards: {},
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    updateValue(state: { cards: any }, action: IUpdateAction) {
      const [index1, index2] = action.payload.index.split(',');
      state.cards[index1][index2][action.payload.option] = action.payload.value;
    },
    saveCards(state, action) {
      axios.put(process.env.REACT_APP_CARDS_URL!, state.cards);
    },
    removeCard(state: { cards: any }, action: { payload: string }) {
      const [index1, index2] = action.payload.split(',');
      const filterCards = state.cards[index1].filter(
        (card: ICards, index: number) => {
          return index !== Number(index2);
        },
      );
      state.cards[index1] = filterCards;
    },
    addCard(state: { cards: any }, action) {
      state.cards[action.payload].push({});
    },
  },
  extraReducers(builder) {
    builder.addCase(getCardsData.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(
      getCardsData.fulfilled,
      (state, action: PayloadAction<ICards>) => {
        state.status = 'complete';
        state.cards = action.payload;
      },
    );
    builder.addCase(getCardsData.rejected, (state, action) => {
      state.status = 'error';
    });
  },
});

export const cardsActions = cardsSlice.actions;
export default cardsSlice;
