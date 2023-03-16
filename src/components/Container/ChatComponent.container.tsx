import ChatContextProvider from '../../store/ChatContextProvider';
import ChatWritter from '../ChatWritter';
import ChatBox from './ChatBox.container';

const ChatComponent = () => {
  return (
    <ChatContextProvider>
      <div className="flex flex-col bg-slate-200  min-h-screen max-h-screen min-w-screen max-w-screen overflow-hidden">
        <div className="relative bg-base w-full h-[20vh] text-white flex flex-col justify-center items-center py-2 px-8">
          <img
            src="/img/background_image_chat.png"
            className="absolute w-full h-full"
          />
          <p className="text-4xl mr-auto font-['Jost'] pl-8">¡Hola!</p>
          <p className="text-2xl ml-auto font-['Jost']">Bienvenido a 1989</p>
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
