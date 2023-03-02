import { useSelector } from 'react-redux';
import { Conversation } from '../../interfaces/Conversation.interface';
import { ReduxState } from '../../interfaces/Redux.interface';
import ChatBubble from '../ChatBubble';

const ChatBox = () => {
  const { messages } = useSelector((state: ReduxState) => state.conversation);

  return (
    <div className="flex flex-col bg-slate-800 flex-1 py-2 px-4 gap-2 mb-20 h-screen overflow-y-scroll">
      {messages &&
        messages?.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
    </div>
  );
};

export default ChatBox;
