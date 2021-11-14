import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/users/models/register';
import { AuthService } from 'src/app/users/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  error: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  registerSubmit() {
    //handle the form submission
    console.log(JSON.stringify(this.register));
    this.authService.registerUser(this.register).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.router.navigate(['/users/login']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.error = err;
      }
    );
  }
}
