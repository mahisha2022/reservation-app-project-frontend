import { User } from "./User";

export interface Restaurant  {
    userName?: string,
    password?: string,
    restaurantName? : string,
    address?: string,
    phone?: string,
    openAt?: string,
    closeAt?: string,
    totalSeats?: number
}