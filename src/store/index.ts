import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import forecastsReducer from './forecastsReducer';

const rootReducer = combineReducers({
  forecast: forecastsReducer
})

const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof rootReducer>;

export type ThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
  extra?: unknown;
  rejectValue?: unknown;
};

export default store;