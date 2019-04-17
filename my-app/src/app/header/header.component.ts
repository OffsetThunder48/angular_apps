import { Component, Output, EventEmitter, OnChanges } from '@angular/core';
import { HeaderLinkModel } from './header-link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navItems: Array<HeaderLinkModel> = [
    {name: 'Home', children: ['<=>']},
    {name: 'About Me', children: ['Professional', 'Academic', 'Personal']},
    {name: 'Games', children: ['PC', 'xBox One', 'Nintendo Switch']},
    {name: 'Gallery', children: ['Games', 'Music', 'Science']},
    {name: 'Contact', children: ['IRL', 'email']}
  ];
  open = (i: number, el: any) => {
    const elem = document.getElementsByClassName('subsubnav').item(i) as HTMLElement;
    if (elem.style.visibility === 'hidden') {
      elem.style.visibility = 'visible';
      elem.onmouseleave = () => {
        elem.style.visibility = 'hidden';
      };
    } else {
        elem.style.visibility = 'hidden';
    }
    // console.log(i, el);
  }

}
