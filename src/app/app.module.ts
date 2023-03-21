import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ListOfRestaurantsComponent } from './pages/list-of-restaurants/list-of-restaurants.component';
import { RestaurantDetailsComponent } from './pages/restaurant-details/restaurant-details.component';
import { AdminRestaurantDetailsComponent } from './pages/admin-restaurant-details/admin-restaurant-details.component';
import { CustomerNavbarComponent } from './components/customer-navbar/customer-navbar.component';
import { RestaurantNavbarComponent } from './components/restaurant-navbar/restaurant-navbar.component';
import { ReservationInputComponent } from './components/reservation-input/reservation-input.component';
import { MenuItemInputComponent } from './menu-item-input/menu-item-input.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { MenuItemComponent } from './componenets/menu-item/menu-item.component';
import { ReservationListComponent } from './componenets/reservation-list/reservation-list.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListOfRestaurantsComponent,
    RestaurantDetailsComponent,
    AdminRestaurantDetailsComponent,
    CustomerNavbarComponent,
    RestaurantNavbarComponent,
    ReservationInputComponent,
    MenuItemInputComponent,
    RestaurantListComponent,
    MenuListComponent,
    RestaurantComponent,
    MenuItemComponent,
    ReservationListComponent,
    ReservationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
