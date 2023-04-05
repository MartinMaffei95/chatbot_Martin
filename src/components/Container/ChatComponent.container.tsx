import ChatContextProvider from '../../store/ChatContextProvider';
import ChatWritter from '../ChatWritter';
import ChatBox from './ChatBox.container';

const ChatComponent = () => {
  return (
    <ChatContextProvider>
      <div className="flex flex-col bg-neutral-50  min-h-screen max-h-screen min-w-screen max-w-screen overflow-hidden">
        <div className="w-full text-white flex flex-col bg-slate-400 font-['Jost'] justify-center p-4 gap-4 ">
          <p className="text-4xl ">¡Hola!</p>
          <p className="text-2xl self-center ">Bienvenido a mi chat personal</p>
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
