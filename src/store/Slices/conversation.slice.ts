import { saveConversation } from './../../utils/messageToLocal';
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

const cleanState: Conversation = {
  id: '',
  messages: conversation,
};

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState: cleanState,
  reducers: {
    // ## First display the message in the messagingBox & latter send to server.
    sendMessage: (state, action: PayloadAction<Message>): void => {
      value: state.messages.push(action.payload);
      const res = postReqMessage(action.payload);
    },
    reciveMessage: (state, action: PayloadAction<Message>): void => {
      value: state.messages.push(action.payload);
      // => Save the message on localStorage
      // saveConversation(state.id, state.messages);
    },
  },
});

export const { sendMessage, reciveMessage } = conversationSlice.actions;

export default conversationSlice.reducer;
