import React from 'react';

const ChatBubble = ({ msg, clientMessage }: any) => {
  return (
    <div
      className={`${
        clientMessage ? 'bg-blue-500 self-start ' : 'bg-lime-500 self-end '
      } max-w-50% px-2 py-1 rounded`}
    >
      {msg}
    </div>
  );
};

export default ChatBubble;
