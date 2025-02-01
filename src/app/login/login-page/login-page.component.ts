import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  public userList: any = [];
  public email: string = '';
  public password: string = '';

  constructor(private http: HttpClient, private router:Router) {}

  login():void{
    const user = {
      username: this.email,
      password: this.password
    }

    this.http.post("http://localhost:8080/user/login",user,{responseType: 'json'}).subscribe(
        (response: any)=>{
          console.log(response);
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('token', JSON.stringify(response.token));
          this.router.navigate(['/dashboard']);
          alert("Login successful!");
        },
        (error) => {
          console.error(error);
          alert("Incorrect email or password.");
        }
    );
  }
}