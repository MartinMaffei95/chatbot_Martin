import { conversation } from './../db/conversations/1';
import { Message } from '../interfaces/Message.interface';

/*
  ## ToDo: Implement localstorage for messages
  implement to a sesion in localstorage ex
  {
    id,
    messages,
    solved,  <== use this boolean for delete chat
    expirationDate <== or this date 
  }
*/
export const saveConversation = (
  conversationId: string | undefined,
  messages: Message[]
): void => {
  const conversation: object = {
    id: conversationId || '',
    messages: messages,
    solved: false,
  };

  const conversationString = JSON.stringify(conversation);
  localStorage.setItem('conversation', conversationString);
  return;
};
