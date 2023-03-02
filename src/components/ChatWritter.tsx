import { useState, ChangeEvent } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Message } from '../interfaces/Message.interface';
import { sendMessage } from '../store/Slices/conversation.slice';
const ChatWritter = () => {
  const dispatch = useDispatch();

  const [writeMessage, setWriteMessage] = useState<string>('');
  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setWriteMessage(val);
  };
  const { VITE_APP_SERVER_NAME } = import.meta.env;

  // This function dispatch the send event of redux. First create the objects and later use
  const send = () => {
    const messageObj: Message = {
      id: Math.round(Math.random() * 10000),
      from: 'Martin',
      to: VITE_APP_SERVER_NAME,
      body: writeMessage,
      type: 'TEXT', //<<== TODO: Change this when have a better type of messaes (with actions or something)
      date: Date.now(),
      read: false,
      send: false,
    };
    dispatch(sendMessage(messageObj));
  };

  return (
    <div className="bg-green-600 h-20 w-screen ">
      <form className="flex h-full w-full items-center gap-2 justify-between p-2 ">
        <textarea
          className="bg-slate-200 h-full rounded flex-1 resize-none"
          autoFocus
          onChange={(e) => handleMessage(e)}
        />
        <button
          className=" flex justify-center items-center rounded bg-slate-50 h-8 w-8 "
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            send();
          }}
        >
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
};

export default ChatWritter;
