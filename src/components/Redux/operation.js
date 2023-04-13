import {createAsyncThunk} from "@reduxjs/toolkit";

import {addContactApi, getContactApi, removeContactApi} from '../services/mockApi'

export const addContact = createAsyncThunk(
    "contacts/add",
    async (newContact, thunkApi) => {
      try {
        const contact = await addContactApi(newContact);
        return contact; 
      } catch (error) {
        return thunkApi.rejectWithValue(error.message); 
      }
    }
  );

  export const getContact = createAsyncThunk(
    "contacts/get",
    async (_, thunkApi) => {
      try {
        const contact = await getContactApi();
        console.log('cont', contact)
        return contact; 
      } catch (error) {
        return thunkApi.rejectWithValue(error.message); 
      }
    },
    {
    condition: (_, { getState }) => { 
      const { items } = getState().contacts;

      if (!items.length) return true;
      return false;
},
},
  );
  export const removeContact = createAsyncThunk(
    "contacts/remove",
    async (id, thunkApi) => {
      try {
        const contact = await removeContactApi(id);
        return contact; 
      } catch (error) {
        return thunkApi.rejectWithValue(error.message); 
      }
    }
  );