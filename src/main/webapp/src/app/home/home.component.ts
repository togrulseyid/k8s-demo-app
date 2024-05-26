import { Component } from '@angular/core';
import {Guest} from "../models/guest";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {GuestsComponent} from "../guests/guests.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    GuestsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public guests:Guest[] = []

}
