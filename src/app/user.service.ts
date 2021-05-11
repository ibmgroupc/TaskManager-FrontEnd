import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
const URL = 'http://localhost:8086/user/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  //to create user
  create(user: User) {
    return this.http.post(URL, user, {
      headers: { 'content-type': 'application/json' },
      responseType: 'text',
    });
  }

  //to login
  login(user: User) {
    return this.http.get(
      URL + 'search?password=' + user.password + '&username=' + user.username
    );
  }
}
