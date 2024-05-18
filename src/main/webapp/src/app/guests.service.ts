import {Injectable} from '@angular/core';
import {Guest} from "./models/guest";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  api = "http://localhost:8085"

  constructor(private httpClient: HttpClient) {
  }

  public listGuests(): Observable<Guest[]> {
    return this.httpClient.get<Guest[]>(`${this.api}/guests/list`);
  }

  public findById(id: number): Observable<Guest> {
    return this.httpClient.get<Guest>(`${this.api}/guests/id/${id}`);
  }

  public findByName(name: string): Observable<Guest[]> {
    return this.httpClient.get<Guest[]>(`${this.api}/guests/name/${name}`);
  }

  public addGuest(guest: Guest): Observable<Guest> {
    return this.httpClient.post<Guest>(`${this.api}/guests/add`, guest);
  }

}
