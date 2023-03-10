import ChatContextProvider from '../../store/ChatContextProvider';
import ChatWritter from '../ChatWritter';
import ChatBox from './ChatBox.container';

const ChatComponent = () => {
  return (
    <ChatContextProvider>
      <div className="flex flex-col bg-neutral-50  min-h-screen max-h-screen min-w-screen max-w-screen overflow-hidden">
          <div className="relative bg-none w-full h-[35vh] text-white flex flex-col justify-center ">
          <div className="absolute w-full h-full">
            <img src="/img/background_image_chat2.png" className="absolute bg-cover w-full h-full"/>
          </div>
          <div className="text-6xl inset-0 pl-36 pt-6 font-['Jost'] absolute">¡Hola!</div>
          <div className="text-4xl inset-0 pl-64 pt-24 font-['Jost'] absolute">Bienvenido a 1989</div>
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
