import { addTime, isExpired } from './toUnix';
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

const { VITE_APP_EXPIRATION_MS } = import.meta.env;
export interface localConversationType {
  id: string;
  messages: Message[];
  solved?: boolean;
  timeToExpire: number; // => unix timestamp
}

export const saveConversation = (
  conversationId: string | undefined,
  messages: Message[]
): void => {
  const conversation: localConversationType = {
    id: conversationId || '',
    messages: messages,
    solved: false,
    timeToExpire: addTime(VITE_APP_EXPIRATION_MS),
  };

  const conversationString = JSON.stringify(conversation);
  localStorage.setItem('conversation', conversationString);
  return;
};

// TODO: add logic for send a httpReq to api when delete conversation.
export const deleteConversation = () => {
  if (!localStorage.getItem('conversation')) return;
  const conversation: localConversationType = JSON.parse(
    localStorage.getItem('conversation') as string
  );

  // #if conversation is expired
  if (isExpired(conversation.timeToExpire)) {
    console.log('Delete conversation');

    localStorage.removeItem('conversation');
  }
};
