import { Transport } from "./transport.model";

export interface Flight {
  origin: string,
  destination: string,
  price?: number,
  transport: Transport
}
