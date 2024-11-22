import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './common/nav-bar/home-page.component';
import { ELicenseComponent } from './common/e-license/e-license.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SignupPageComponent } from './login/signup-page/signup-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginPageComponent,HomePageComponent,DashboardComponent,ELicenseComponent,SignupPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fine_Management_System';


}
