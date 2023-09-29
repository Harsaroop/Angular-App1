import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Implement logic to check if the user is authenticated (e.g., based on successful registration)
    const isAuthenticated = true; // Replace with your authentication logic
    if (!isAuthenticated) {
      this.router.navigate(['/registration']); // Redirect to the registration page if not authenticated
    }
    return isAuthenticated;
  }
}
