import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = './../../../assets/users.json'

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }
}
