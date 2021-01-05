import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageisOpen: false,
  },
  reducers: {

    openSendMesage: state => {
      state.sendMessageisOpen= true;
    },
    closeSendMesage: state => {
      state.sendMessageisOpen= false;
    },
   
  },
});

export const { openSendMesage, closeSendMesage } = mailSlice.actions;


export const selectSendMessageisOpen = state => state.mail.sendMessageisOpen;

export default mailSlice.reducer;
