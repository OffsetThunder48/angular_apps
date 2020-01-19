import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login-component',
    templateUrl: './app.login.component.html',
    styleUrls: ['./app.login.component.css']
})

export class LoginComponent {
    isValid = null;
    userDetails = new FormGroup({
        email: new FormControl('', [
            Validators.email
        ]),
        password: new FormControl('', [
            Validators.minLength(6)
        ])
    });
    onFormSubmit = () => {
        this.isValid = false;
        if (this.userDetails.invalid || this.userDetails.pristine) {
            this.userDetails.reset();
            return;
        }
        this.isValid = true;
    }
    get email() {
        return this.userDetails.get('email');
    }
    get password() {
        return this.userDetails.get('password');
    }
}
