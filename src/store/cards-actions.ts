import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCardsData = createAsyncThunk(
  'cardsSlice/getCardsData',
  async () => {
    const res = await axios.get(process.env.REACT_APP_CARDS_URL!);
    return res.data;
  },
);
