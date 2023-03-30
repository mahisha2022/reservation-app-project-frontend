import { User } from "./User";
import { Reservation } from "./Reservation";

export interface Restaurant extends User {
  name : string,
  address: string,
  phone?: string,
  totalSeats?: number,
  openAt?: string,
  closeAt?: string,
  reservations : Reservation[]
}
