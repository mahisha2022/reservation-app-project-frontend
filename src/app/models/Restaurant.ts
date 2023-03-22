import { User } from "./User";

export interface Restaurant extends User {
    restaurantId : number,
    restaurantName : string
}