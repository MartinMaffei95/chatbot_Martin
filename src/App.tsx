import { useEffect } from 'react';
import ChatComponent from './components/Container/ChatComponent.container';
import Cookies from 'js-cookie';
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

  return (
    <div className="overflow-hidden min-h-screen max-h-full min-w-screen max-w-screen ">
      <ChatComponent />
    </div>
  );
};

export default App;
