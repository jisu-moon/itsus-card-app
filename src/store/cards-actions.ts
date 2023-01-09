import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCardsData = createAsyncThunk(
  'cardsSlice/fetchCardsData',
  async () => {
    const res = await axios.get(process.env.REACT_APP_CARDS_URL_TEST!);
    return res.data;
  },
);
