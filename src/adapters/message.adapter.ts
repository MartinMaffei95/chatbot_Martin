import { MessageFromAPI, Message } from '../interfaces';

export const messagesFromApi = (message: MessageFromAPI): Message => {
  let processMsg = {
    id: message.id,
    body: message.body,
    sender: message.sender,
    actions: message.actions || [],
    date: message.receive_date,
  };

  return processMsg;
};

export const messagesToApi = (message: Message): MessageFromAPI => {
  let processMsg = {
    id: message.id,
    body: message.body,
    sender: message.sender,
    // actions: message.actions || [],
    receive_date: message.date,
  };
  return processMsg;
};
