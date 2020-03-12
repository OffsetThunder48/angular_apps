import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-component',
    templateUrl: './app.login.component.html',
    styleUrls: ['./app.login.component.css']
})
export class LoginComponent {
    correctDetails = {
        username: 'test@test.com',
        password: 'testtest'
    };
    constructor(private router: Router) {
    }
     userData = {
        username: '',
        password: ''
    };
    userDetails = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6)
        ])
    });
    onFormSubmit = () => {
        if (this.userData.username !== this.correctDetails.username || this.userData.password !== this.correctDetails.password) {
            alert('Incorrect Credentials!');
            return;
        } else {
            this.router.navigate(['/register']);
        }
    }
    readuname = (event) => {
        this.userData.username = event.target.value;
        console.log(this.userData.username);
    }
    readpswd = (event) => {
        this.userData.password = event.target.value;
        console.log(this.userData.password);
    }
}
