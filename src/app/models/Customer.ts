import { Reservation } from "./Reservation";
import { Restaurant } from "./Restaurant";
import { User } from "./User";

export interface Customer extends User {
    customerId : number,
    favorites : Restaurant[],
    reservations : Reservation[]
}