import { useState, useEffect } from 'react';
import ChatComponent from './components/Container/ChatComponent.container';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('ASDASD');
    window.addEventListener('message', (dataIn: MessageEvent) => {
      try {
        const data = JSON.parse(dataIn.data) || { item: null, value: null };
        const item = data.setItem;
        const value = data.value;
        console.log({ item, value });

        if (item === 'connect_tenant' && value !== null) {
          console.log('=======>', value);
          this.cookieService.put('chat_saas_id ==>', value, {
            sameSite: 'non',
            secure: true,
          });
          this.showChat = value;
        }
      } catch (error) {}
    });
  }, []);

  return (
    <div className="">
      <ChatComponent />
    </div>
  );
};

export default App;
