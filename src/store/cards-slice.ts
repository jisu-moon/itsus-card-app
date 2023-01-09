import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCardsData } from './cards-actions';

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
    key: string;
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
    addInput(state: { cards: any }, action: { payload: string }) {
      const [index1, index2] = action.payload.split(',');
      state.cards[index1][index2] = {
        ...state.cards[index1][index2],
        '': '',
      };
    },
    removeInput(state: { cards: any }, action: IUpdateAction) {
      const [index1, index2] = action.payload.index.split(',');
      delete state.cards[index1][index2][action.payload.key];
    },
    updateKey(state: { cards: any }, action: IUpdateAction) {
      const [index1, index2] = action.payload.index.split(',');
      state.cards[index1][index2] = {
        ...state.cards[index1][index2],
        [action.payload.value!]:
          state.cards[index1][index2][action.payload.key],
      };
      delete state.cards[index1][index2][action.payload.prevValue!];
    },
    updateValue(state: { cards: any }, action: IUpdateAction) {
      const [index1, index2] = action.payload.index.split(',');
      state.cards[index1][index2][action.payload.key] = action.payload.value;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCardsData.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(
      fetchCardsData.fulfilled,
      (state, action: PayloadAction<ICards>) => {
        state.status = 'complete';
        state.cards = action.payload;
      },
    );
    builder.addCase(fetchCardsData.rejected, (state, action) => {
      state.status = 'error';
    });
  },
});

export const cardsActions = cardsSlice.actions;
export default cardsSlice;
