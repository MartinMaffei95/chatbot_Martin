import { Message } from '../interfaces/Message.interface';

type ChatBubbleType = {
  message: Message;
};

const ChatBubble = ({ message }: ChatBubbleType) => {
  const { VITE_APP_SERVER_NAME } = import.meta.env;

  return (
    <div
      className={`${
        message?.from !== VITE_APP_SERVER_NAME
          ? 'bg-blue-300 self-start '
          : 'bg-lime-400 self-end '
      } ${
        message?.send ? 'brightness-1' : 'brightness-50'
      } max-w-50% px-2 py-1 rounded flex flex-col`}
    >
      <p className="text-slate-900 text-m">{message?.body}</p>

      <span className="text-gray-700 text-xs  ml-auto">{message?.date}</span>
    </div>
  );
};

export default ChatBubble;
