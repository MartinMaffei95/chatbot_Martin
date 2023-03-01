import { Conversation } from './Conversation.interface';

export type ReduxState = {
  conversation: ConversationState;
};

type ConversationState = Conversation;
