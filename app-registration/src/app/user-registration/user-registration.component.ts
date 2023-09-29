import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import the necessary modules

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent{
  registrationForm: FormGroup; // Declare and initialize the registrationForm property

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]], // Add a field for the password
      bio: ['', Validators.maxLength(200)] // Add a field for the bio
    });
  }

  registerUser() {
    if (this.registrationForm.valid) {
      // Retrieve form values
      const name = this.registrationForm.get('name')?.value;
      const email = this.registrationForm.get('email')?.value;
      const password = this.registrationForm.get('password')?.value;
      const bio = this.registrationForm.get('bio')?.value;

      // You can perform registration logic here, e.g., send data to the server
      // For now, log the form data to the console
      console.log('Registration Form Data:');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Bio:', bio);

      // You can add your registration API call or other logic here
    }
  }

}
