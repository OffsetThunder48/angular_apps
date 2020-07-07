import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent {
  @ViewChild('username', { static: true }) usrname: ElementRef;
  @ViewChild('pswd', { static: true }) pswd: ElementRef;
  username = 'offsetthunder48';
  password = 'hahahaloser!';
  constructor(public router: Router) {}
  login = () => {
    if (this.username === this.usrname.nativeElement.value && this.password === this.pswd.nativeElement.value ) {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid Username/Password!');
    }
  }
}
