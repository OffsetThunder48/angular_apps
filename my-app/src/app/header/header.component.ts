import { Component, ViewChildren, QueryList } from '@angular/core';
import { HeaderLinkModel } from './header-link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChildren('links') components: QueryList<HeaderComponent>;

  navItems: Array<HeaderLinkModel> = [
    {name: 'Home', children: ['<=>']},
    {name: 'About Me', children: ['Professional', 'Academic', 'Personal']},
    {name: 'Games', children: ['PC', 'xBox One', 'Nintendo Switch']},
    {name: 'Gallery', children: ['Games', 'Music', 'Science']},
    {name: 'Contact', children: ['IRL', 'email']}
  ];

  open = (i: number) => {
   console.log(this.components); 
  }

}
