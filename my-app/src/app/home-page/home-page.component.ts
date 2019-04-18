import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  numbers: Array<number>;
  constructor() {
    this.numbers = Array(16).map((x, i) => i);
  }
}
