import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfRestaurantsComponent } from './pages/list-of-restaurants/list-of-restaurants.component';
import { RestaurantDetailsComponent } from './pages/restaurant-details/restaurant-details.component';
import { AdminRestaurantDetailsComponent } from './pages/admin-restaurant-details/admin-restaurant-details.component';
import { CustomerNavbarComponent } from './components/customer-navbar/customer-navbar.component';
import { RestaurantNavbarComponent } from './components/restaurant-navbar/restaurant-navbar.component';
import { ReservationInputComponent } from './components/reservation-input/reservation-input.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuItemInputComponent } from './components/menu-item-input/menu-item-input.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { LoginComponent } from './pages/login/login.component';
import { CurrentReservationsComponent } from './pages/current-reservations/current-reservations.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { FormsModule } from '@angular/forms';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { RestaurantformComponent } from './components/restaurantform/restaurantform.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfRestaurantsComponent,
    RestaurantDetailsComponent,
    AdminRestaurantDetailsComponent,
    CustomerNavbarComponent,
    RestaurantNavbarComponent,
    ReservationInputComponent,
    RestaurantListComponent,
    MenuListComponent,
    RestaurantComponent,
    ReservationComponent,
    LoginComponent,
    CurrentReservationsComponent,
    SignUpComponent,
    MyReservationsComponent,
    ReservationListComponent,
    MenuItemComponent,
    MenuItemInputComponent,
    RestaurantformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
