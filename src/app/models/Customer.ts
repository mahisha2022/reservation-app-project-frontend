import { User } from "./User";
import { Reservation } from "./Reservation";

export interface Customer extends User {
  // reservations : Reservation[]
  username: string, 
  passwd: string, 
  reservation?: string,
}
