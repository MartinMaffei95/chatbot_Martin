import { Provider } from 'react-redux';
import { store } from './store';

export type ChatContextProviderType = {
  children: JSX.Element | JSX.Element[];
};

const ChatContextProvider = ({ children }: ChatContextProviderType) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ChatContextProvider;
