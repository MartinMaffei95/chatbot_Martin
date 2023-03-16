import ChatContextProvider from '../../store/ChatContextProvider';
import ChatWritter from '../ChatWritter';
import ChatBox from './ChatBox.container';

const ChatComponent = () => {
  return (
    <ChatContextProvider>
      <div className="flex flex-col bg-neutral-50  min-h-screen max-h-screen min-w-screen max-w-screen overflow-hidden">
        <div className="absolute w-full h-[35vh] text-white flex flex-col bg-transparent bg-opacity-0">
          <div className="opacity-60 z-40 font-['Jost'] flex flex-col justify-center p-4 gap-4">
            <p className="text-5xl  ">¡Hola!</p>
            <p className="text-3xl self-center">Bienvenido a 1989</p>
          </div>
          <div className="absolute w-full h-full bg-transparent bg-opacity-0">
            <img
              src="../img/background_image_chat2.png"
              className="bg-cover w-full h-full bg-transparent bg-opacity-0 "
            />
          </div>
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
