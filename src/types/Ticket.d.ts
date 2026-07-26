interface ITicket {
  _id?: string;
  name?: string;
  price?: number | string;
  quantity?: number;
  description?: string;
  events?: string;
}

export type { ITicket };
