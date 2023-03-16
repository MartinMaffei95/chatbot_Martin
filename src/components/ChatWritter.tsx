import { useState, ChangeEvent, KeyboardEvent, useRef } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Conversation, Message } from '../interfaces';
import { sendMessage } from '../store/Slices/conversation.slice';
import { toUnix } from '../utils/toUnix';

const ChatWritter = () => {
  const dispatch = useDispatch();

  const [writeMessage, setWriteMessage] = useState<string>('');
  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setWriteMessage(val);
  };
  const { VITE_APP_SERVER_NAME } = import.meta.env;
  const textA = useRef<HTMLTextAreaElement>(null);

  // ## getting the id of conversation
  const conv: Conversation = JSON.parse(
    localStorage.getItem('conversation') as string
  );

  // This function dispatch the send event of redux. First create the objects and later use
  const send = () => {
    if (!writeMessage || writeMessage.length <= 0)
      return console.log('el msg esta vacio');
    try {
      const messageObj: Message = {
        id: conv?.id || '',
        sender: VITE_APP_SERVER_NAME,
        body: writeMessage,
        // type: 'TEXT', //<<== TODO: Change this when have a better type of messaes (with actions or something)
        date: toUnix(),
      };
      dispatch(sendMessage(messageObj));
      setWriteMessage('');
    } catch (e) {
      console.log('el msg esta vacio');
    }
  };
  // ## Send message with 'Enter'
  const keyPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className=" h-20 w-screen border-t-slate-200 border-2">
      <form className="flex w-full h-full items-center gap-2 justify-between p-2 ">
        <textarea
          ref={textA}
          className="bg-slate-50 h-full rounded flex-1 resize-none pt-4 indent-2.5"
          autoFocus
          value={writeMessage}
          onChange={(e) => handleMessage(e)}
          onKeyDown={(e) => keyPressEnter(e)}
          placeholder="Escriba su mensaje aquí"
        />
        <button
          className="flex justify-center items-center rounded-full bg-slate-200 h-16 w-16 "
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
