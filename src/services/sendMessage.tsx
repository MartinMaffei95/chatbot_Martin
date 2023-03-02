// ==> REDUX
import { store } from '../store/store';
import { changeStatus } from '../store/Slices/conversation.slice';
//==> interfaces
import { Message } from '../interfaces/Message.interface';

export const postReqMessage = async (msgData: Message) => {
  try {
    const res = await fetch('http://localhost:1323/weBot', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msgData),
    });
    const data = await res.json();
    store.dispatch(changeStatus(msgData.id));
    return data;
  } catch (error) {
    console.log(error);
  }
};
