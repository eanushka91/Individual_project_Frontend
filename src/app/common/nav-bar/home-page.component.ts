import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) {
    this.checkUserRole();
  }

  checkUserRole() {
    const userRole = this.getUserRole();
    if (userRole === 'admin') {
     
    } else {
      this.router.navigate(['/payment']);
    }
  }

  getUserRole() {
    return 'user';
  }

  role: string = 'user';
  currentUser: any = {}

  ngOnInit(): void {
       this.currentUser= localStorage.getItem('user');
       this.currentUser = JSON.parse(this.currentUser);
       console.log(this.currentUser);
       
       this.role = this.currentUser.role;
       console.log(this.role);
       
  }
}
