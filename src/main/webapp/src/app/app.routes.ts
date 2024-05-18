import {Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {GuestsComponent} from "./guests/guests.component";

export const routes: Routes = [
  {path: 'header', component: HeaderComponent},

  {path: '', component: HomeComponent},

  {path: 'guests', component: GuestsComponent}
];
