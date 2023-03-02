export interface Message {
  id: number;
  from: string;
  to: string;
  body: string;
  type: string;
  actions?: null | [];
  date: number | string;
  read: boolean;
  send: boolean;
}

// type Action ={
//  text: string;
//  id: number;
// }

// [
// {
//   texto: eWhatsApp,
//   id: 1
// },
// {
//   texto: Correo,
//   id: 2
// },
// {
//   texto: telefono,
//   id: 3
// }
// ];
