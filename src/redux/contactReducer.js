import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  messages: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },

    updateContact: (state, action) => {
      const { index, name, number } = action.payload;
      state.contacts = state.contacts.map((contact, idx) =>
        idx === index ? { name, number } : contact
      );
    },

    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (_, index) => index !== action.payload
      );
    },

    removeAllContacts: state => {
      state.contacts = [];
    },

    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    updateMessage: (state, action) => {
      const { index, text } = action.payload;
      state.messages = state.messages.map((message, idx) =>
        idx === index ? { ...message, text } : message
      );
    },

    removeMessage: (state, action) => {
      state.messages = state.messages.filter(
        (_, index) => index !== action.payload
      );
    },

    removeAllMessages: state => {
      state.messages = [];
    },
  },
});

export const {
  addContact,
  updateContact,
  removeContact,
  removeAllContacts,
  addMessage,
  updateMessage,
  removeMessage,
  removeAllMessages,
} = contactsSlice.actions;

export default contactsSlice.reducer;
