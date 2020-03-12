import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-component',
  templateUrl: './app.registration.component.html',
  styleUrls: ['./app.registration.component.css']
})

export class RegistrationComponent {
  onSubmitHandler = () => {
    alert('User Data Submitted Successfully!');
  }
}
