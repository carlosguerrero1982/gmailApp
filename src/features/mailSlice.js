import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageisOpen: false,
    selectedMail:null,
  },
  reducers: {

    selectMail: (state,action) => {
      state.selectedMail= action.payload;
    },
    openSendMesage: state => {
      state.sendMessageisOpen= true;
    },
    closeSendMesage: state => {
      state.sendMessageisOpen= false;
    },
   
  },
});

export const { openSendMesage, closeSendMesage,selectMail } = mailSlice.actions;


export const selectSendMessageisOpen = state => state.mail.sendMessageisOpen;
export const selectOpenMail = state => state.mail.selectedMail;

export default mailSlice.reducer;
