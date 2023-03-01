import ChatContextProvider from '../../store/ChatContextProvider';
import ChatWritter from '../ChatWritter';
import ChatBox from './ChatBox.container';

const ChatComponent = () => {
  return (
    <ChatContextProvider>
      <div className="flex flex-col bg-red-500 w-screen min-h-screen h-full ">
        <ChatBox />
        <div className="flex-initial ">
          <ChatWritter />
        </div>
      </div>
    </ChatContextProvider>
  );
};

export default ChatComponent;
