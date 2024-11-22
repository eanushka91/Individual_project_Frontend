import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor (
    private router: Router,
  )
  {}

  canActivate(): boolean {
    // Add your authentication logic here
    return true; // Placeholder return value
  }
}
