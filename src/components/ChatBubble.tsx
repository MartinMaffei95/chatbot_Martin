import { Message } from '../interfaces/Message.interface';
import { toDateString } from '../utils/toUnix';

type ChatBubbleType = {
  message: Message;
};

const ChatBubble = ({ message }: ChatBubbleType) => {
  const { VITE_APP_SERVER_NAME } = import.meta.env;
  //
  return (
    <div
      className={`${
        message?.sender !== VITE_APP_SERVER_NAME
          ? 'bg-slate-400 self-end text-slate-800 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl pl-6'
          : 'bg-blue-500 self-start text-neutral-50 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl pr-6'
      }
      
      max-w-[80%] px-3 py-2  flex flex-col`}
    >
      <p className="ext-m font-semibold">{message?.body}</p>

      <span className="text-gray-700 text-xs font-['Jost'] ml-auto">
        {toDateString(message?.date)}
      </span>
    </div>
  );
};

export default ChatBubble;
