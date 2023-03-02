// ==> REDUX TOOLKIT
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// ==> TS Interfaces
import { Conversation } from '../../interfaces/Conversation.interface';
import { Message } from '../../interfaces/Message.interface';
// ==> Services
import { postReqMessage } from '../../services/sendMessage';
// ==> Mock messages for db -- USE THIS ONLY FOR DEVELOPMENT
import { conversation } from '../../db/conversations/1';

const initialState: Conversation = {
  id: '',
  messages: conversation,
};

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    // ##First display the message in the messagingBox & latter send to server.
    sendMessage: (state, action: PayloadAction<Message>): void => {
      value: state.messages.push(action.payload);
      const res = postReqMessage(action.payload);
    },
    // ## Used for change the "send" attribute on the message | Try the effect with slow network connection
    changeStatus: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      const fRes = state.messages.find(
        (message) => message.id === action.payload
      );
      if (!fRes) return;
      fRes.send = true;
    },
  },
});

export const { sendMessage, changeStatus } = conversationSlice.actions;

export default conversationSlice.reducer;