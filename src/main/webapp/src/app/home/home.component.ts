import { Component } from '@angular/core';
import {Guest} from "../models/guest";
import {MatTab, MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public guests:Guest[] = []

}
