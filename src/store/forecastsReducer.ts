import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { IForecast } from '../models';
import { ThunkConfig } from './index';

const baseUrl = process.env.REACT_APP_API_URL

export const getAllForecasts = createAsyncThunk<IForecast[], null, ThunkConfig>('getForecasts', 
  async() => {
    try {
      const response = await axios.get(`${baseUrl}/forecasts`);
      return response.data;
    } catch (error) {
      throw Error
    }
});

type InitialState = {
  items: IForecast[];
  activeItem?: IForecast | null;
}

const initialState: InitialState = {
  items: [],
  activeItem: null
};

export const forecastsReducer = createSlice({
  name: 'forecasts',
  initialState: initialState,
  reducers: {
    setActiveItem: (state, action) => {
      const active = state.items.find(el => el.id === action.payload);
      if (active) { 
        state.activeItem = active;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllForecasts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.activeItem = action.payload[0]
    })
  }
})

export const { setActiveItem } = forecastsReducer.actions;

export default forecastsReducer.reducer