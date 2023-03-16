// Used in the app. Obtained from adapter, trasnform the api message
export interface Message {
  id: string;
  body: string;
  sender: string;
  actions?: null | [];
  date: number;
  // type: string;
}

export interface Action {
  id: number; // Identifier the action
  label: string; // text to display in the action
}

export interface MessageFromAPI {
  id: string;
  body: string;
  sender: string;
  actions?: null | [];
  receive_date: number;
}

/*
  ## example: Actions[]
[
  {
    id:1,
    label:"Si"
  },
  {
    id:2,
    label:"No"
  },
  {
    id:3,
    label:"Consultas sobre ventas"
  }
]

*/
