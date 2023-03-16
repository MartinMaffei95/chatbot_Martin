import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../interfaces/Redux.interface';
import ChatBubble from '../ChatBubble';

const ChatBox = () => {
  const { messages } = useSelector((state: ReduxState) => state.conversation);
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    box.current?.scrollTo(0, box.current.scrollHeight);
  }, [messages]);
  return (
    <div
      ref={box}
      className="flex flex-col flex-1 py-2 px-4 gap-2 mb-20 h-screen overflow-y-scroll pt-36"
    >
      {messages &&
        messages?.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
    </div>
  );
};

export default ChatBox;
