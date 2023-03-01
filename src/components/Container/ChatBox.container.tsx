import { useSelector } from 'react-redux';
import { Conversation } from '../../interfaces/Conversation.interface';
import { ReduxState } from '../../interfaces/Redux.interface';
import ChatBubble from '../ChatBubble';
import { v4 as uuidv4 } from 'uuid';

const ChatBox = () => {
  const { messages } = useSelector((state: ReduxState) => state.conversation);
  console.log('CONVERSATION ==>>', messages);
  return (
    <div className="flex flex-col bg-slate-200 flex-1 py-2 px-4 gap-2">
      {messages &&
        messages?.map((message) => <ChatBubble msg={message.body} />)}
      {/* <ChatBubble msg="hola como estas" />
      <ChatBubble msg="Todo bien y vos" clientMessage />
      <ChatBubble msg="decime k onda rey" /> */}
    </div>
  );
};

export default ChatBox;
