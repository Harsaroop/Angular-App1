import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Create this service to interact with mock APIs

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: any; // Define a user profile object

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Fetch user profile data from the API and assign it to userProfile
    this.apiService.getUserProfile().subscribe(
      (data) => {
        this.userProfile = data;
      },
      (error) => {
        // Handle API error
      }
    );
  }
}
