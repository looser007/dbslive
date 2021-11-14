import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/users/models/login';
import { AuthService } from 'src/app/users/services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  error:any={};
  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit(): void {}
  loginSubmit() {
    console.log(JSON.stringify(this.login));
    this.authService.loginUser(this.login).subscribe(
      (res)=>{
      console.log(JSON.stringify(res));
      let decoded = jwt_decode(res.token);
      console.log(JSON.stringify(decoded));
      localStorage.setItem('userDetails',JSON.stringify(decoded));
      localStorage.setItem('token', res.token);
      this.router.navigate(['/dashboard/']);
    },
    (err) => {
      console.log(JSON.stringify(err.error));
      this.error=err.error;
    }
    );
  }
}
