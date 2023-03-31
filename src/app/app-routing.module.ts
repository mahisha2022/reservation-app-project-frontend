import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRestaurantDetailsComponent } from './pages/admin-restaurant-details/admin-restaurant-details.component';
import { CurrentReservationsComponent } from './pages/current-reservations/current-reservations.component';
import { ListOfRestaurantsComponent } from './pages/list-of-restaurants/list-of-restaurants.component';
import { LoginComponent } from './pages/login/login.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { RestaurantDetailsComponent } from './pages/restaurant-details/restaurant-details.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';

const routes: Routes = [
  {
    path: 'listOfRestaurants', 
    component: ListOfRestaurantsComponent
  },
  {
    path: 'currentReservations',
    component: CurrentReservationsComponent
  },
  {
    path: 'restaurantDetails',
    component: RestaurantDetailsComponent
  },
  {
    path: 'adminDetails',
    component: AdminRestaurantDetailsComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'myReservations',
    component: MyReservationsComponent
  },
  {
    path: '**',
    component: LoginComponent
  }, 
  {path: 'customer',  component: CustomerPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
