import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {}
  userArray = [];

//method for validation
  validate() {
    let termsAndConditions = <HTMLInputElement>document.getElementById('tnc');
    if (!this.user.name) {
      Swal.fire('Please enter name.');
    } else if (!this.user.emailId) {
      Swal.fire('Please enter email.');
    } else if (!this.user.mobileNumber) {
      Swal.fire('Please enter mobile number.');
    } else if (!this.user.username) {
      Swal.fire('Please enter username.');
    } else if (!this.user.password) {
      Swal.fire('Please enter password.');
    } else if (!termsAndConditions.checked) {
      Swal.fire('Please accept terms and privacy policy to proceed!');
    }
  }

//to create user
  create() {
    this.validate();
    const observable = this.userService.create(this.user);
    observable.subscribe(
      (response) => {
        console.log(response);
        Swal.fire(
          'Successfully signed up!',
          'Please Login to proceed.',
          'success'
        );
        this.userArray.push(Object.assign({}, this.user));
        this.router.navigate(['/login']);
      },
      (error) => {
        if (error.status != 'OK') {
          Swal.fire('Error!' + error.error);
        }
      }
    );
  }

//to show the password requirements
  show() {
    const divTag = document.getElementById('pwd');
    divTag.style.visibility = 'visible';
    divTag.style.display = 'block';
  }

//to hide the password requirements
  hide() {
    const divTag = document.getElementById('pwd');
    divTag.style.visibility = 'hidden';
    divTag.style.display = 'none';
  }

  ngOnInit(): void {}
}
