export interface Message {
  id: number;
  body: string;
  source: string;
  actions?: null | [];
  date: number | string;
  type: string;
}
