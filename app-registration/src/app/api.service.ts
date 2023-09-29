import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private registrationUrl = 'https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d';
  private profileUrl = 'https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2';

  constructor(private http: HttpClient) {}

  // Method to register a user
  registerUser(userData: any): Observable<any> {
    return this.http.get(this.registrationUrl, userData);
  }

  // Method to get user profile data
  getUserProfile(): Observable<any> {
    return this.http.get(this.profileUrl);
  }
}
