import { Flight } from "./flight.model";

export interface Journey {
  origin: string,
  destination: string,
  price: number,
  flights: Array<Flight>
}
