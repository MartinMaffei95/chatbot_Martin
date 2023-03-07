import { useEffect } from 'react';
import ChatComponent from './components/Container/ChatComponent.container';
import Cookies from 'js-cookie';
import { toDateString } from './utils/toUnix';
import { deleteConversation } from './utils/messageToLocal';
const App = () => {
  useEffect(() => {
    // Recive data from SDK
    window.addEventListener('message', (dataIn: MessageEvent) => {
      try {
        const data = JSON.parse(dataIn.data) || { item: null, value: null };
        const item = data.setItem;
        const value = data.value;
        console.log({ item, value });

        if (item === 'connect_tenant' && value !== null) {
          console.log('=======>', value);

          Cookies.set('chat_saas_id', value, {
            sameSite: 'none',
            secure: true,
          });
        }
      } catch (error) {}
    });
  }, []);

  const MINUTE_MS = 1000; //60000;
  useEffect(() => {
    const interval = setInterval(() => {
      deleteConversation();
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
  return (
    <div className="overflow-hidden min-h-screen max-h-full min-w-screen max-w-screen ">
      <ChatComponent />
    </div>
  );
};

export default App;
