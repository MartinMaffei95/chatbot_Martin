import { Message } from './Message.interface';

export interface Conversation {
  id: string;
  messages: Message[];
}
