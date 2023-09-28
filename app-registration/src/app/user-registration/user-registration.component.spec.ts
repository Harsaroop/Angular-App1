import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service'; // Create this service to interact with mock APIs

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Add validators for password and bio here
    });
  }

  ngOnInit(): void {}

  registerUser() {
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;
      this.apiService.registerUser(userData).subscribe(
        (response) => {
          // Handle successful registration here and navigate to the Profile Page
        },
        (error) => {
          // Handle registration error
        }
      );
    }
  }
}
