import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRestaurantDetailsComponent } from './pages/admin-restaurant-details/admin-restaurant-details.component';
import { CurrentReservationsComponent } from './pages/current-reservations/current-reservations.component';
import { ListOfRestaurantsComponent } from './pages/list-of-restaurants/list-of-restaurants.component';
import { LoginComponent } from './pages/login/login.component';
import { RestaurantDetailsComponent } from './pages/restaurant-details/restaurant-details.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'List of Restaurants', 
    component: ListOfRestaurantsComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Current Reservations',
    component: CurrentReservationsComponent
  },
  {
    path: 'Restaurant Details',
    component: RestaurantDetailsComponent
  },
  {
    path: 'Admin Details',
    component: AdminRestaurantDetailsComponent
  },
  {
    path: 'Sign Up',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
