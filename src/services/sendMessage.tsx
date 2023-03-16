// ==> REDUX
import { store } from '../store/store';
import { reciveMessage } from '../store/Slices/conversation.slice';
//==> interfaces
import { Message } from '../interfaces';
// ==> Adapters
import { messagesFromApi, messagesToApi } from '../adapters';

const { VITE_APP_API_URI } = import.meta.env;

export const postReqMessage = async (msgData: Message) => {
  try {
    const res = await fetch(`${VITE_APP_API_URI}/messages/web/receive`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messagesToApi(msgData)),
    });

    const data = await res.json();
    console.log(data.id);

    //now Store the response
    store.dispatch(reciveMessage(messagesFromApi(data)));
    return data;
  } catch (error) {
    throw new Error(error?.toString());
  }
};
