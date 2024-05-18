import {Component, OnInit} from '@angular/core';
import {MatListItem, MatNavList} from "@angular/material/list";
import {Guest} from "../models/guest";
import {GuestsService} from "../guests.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-guests',
  standalone: true,
  imports: [
    MatNavList,
    MatListItem,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.scss'
})
export class GuestsComponent implements OnInit {

  public guests: Guest[] = [];
  guestForm = this.formBuilder.group({
    name: '',
    note: ''
  });

  constructor(private guestsService: GuestsService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.getGuestsList();
  }

  ngOnInit(): void {
  }

  private getGuestsList() {
    this.guestsService.listGuests().subscribe(
      {
        next: (guests: Guest[]) => {
          this.guests = guests;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );

  }

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.guestForm.value);
    let guest = new Guest(
      this.guestForm.value.name,
      this.guestForm.value.note
    );
    this.guestForm.reset();
    this.addGuests(guest);
  }


  private addGuests(guest: Guest) {
    this.guestsService.addGuest(guest).subscribe((
      {
        next: (guest: Guest) => {
          this.getGuestsList();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }));
  }

}
