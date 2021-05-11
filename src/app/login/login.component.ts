import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {}
  userArray: any;

//method to login into the application
  login(user: User) {
    const observable = this.userService.login(user);
    observable.subscribe(
      (response) => {
        console.log(response);
        if (response[0] == undefined) {
          Swal.fire('Wrong credentials!');
        } else {
          this.userArray = response;
          Swal.fire('Successfully logged in!', '', 'success');
          this.router.navigate(['/view']);
        }
      },
      (error) => {
        console.log(error);
        Swal.fire('Error');
      }
    );
  }

  ngOnInit(): void {}
}
