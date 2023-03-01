export interface Message {
  from: string;
  to: string;
  body: string; // Hola como estas
  type: string; // =>
  date: string;
  read: boolean;
  send: boolean;
}
