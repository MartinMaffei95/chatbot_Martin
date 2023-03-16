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

const cleanState: Conversation = {
  id: '',
  messages: [],
};

const savedConversation = (): Conversation | null => {
  if (!localStorage.getItem('conversation')) return null;
  return JSON.parse(localStorage.getItem('conversation') as string);
};

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState: savedConversation() || cleanState,
  reducers: {
    // ## First display the message in the messagingBox & latter send to server.
    sendMessage: (state, action: PayloadAction<Message>): void => {
      value: state.messages.push(action.payload);
      postReqMessage(action.payload);

      // => Save the message on localStorage
      saveConversation(state.id, state.messages);
    },
    reciveMessage: (state, action: PayloadAction<Message>): void => {
      value: state.messages.push(action.payload);
      value: state.id = action.payload.id;
      // => Save the id in localStorage

      // => Save the message on localStorage
      saveConversation(state.id, state.messages);
    },
  },
});

export const { sendMessage, reciveMessage } = conversationSlice.actions;

export default conversationSlice.reducer;
