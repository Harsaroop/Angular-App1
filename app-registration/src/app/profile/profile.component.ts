import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: any; // Declare userProfile property

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Fetch user profile data from the API and assign it to userProfile
    this.apiService.getUserProfile().subscribe(
      (data) => {
        this.userProfile = data;
      },
      (error) => {
        // Handle API error
        console.error('Error fetching user profile:', error);
      }
    );
  }
}
