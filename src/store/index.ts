import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './cards-slice';

const store = configureStore({
  reducer: cardsSlice.reducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;
