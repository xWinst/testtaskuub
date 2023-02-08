import { configureStore } from '@reduxjs/toolkit';
import contacts from './contactReducer';

const store = configureStore({
  reducer: contacts,
});

export default store;
