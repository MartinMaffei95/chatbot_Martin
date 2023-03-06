import ChatContextProvider from '../../store/ChatContextProvider';
import ChatWritter from '../ChatWritter';
import ChatBox from './ChatBox.container';

const ChatComponent = () => {
  return (
    <ChatContextProvider>
      <div className="flex flex-col bg-slate-200  min-h-screen max-h-screen min-w-screen max-w-screen overflow-hidden">
        <div className="bg-base w-full h-[20vh] text-white flex flex-col justify-center items-center py-2 px-8">
          <p className="text-4xl mr-auto">Hola!</p>
          <p className="text-2xl ml-auto">Bienvenido a 1989</p>
        </div>
        <ChatBox />
        <div className="fixed bottom-0 min-w-full h-20 z-50">
          <ChatWritter />
        </div>
      </div>
    </ChatContextProvider>
  );
};

export default ChatComponent;
