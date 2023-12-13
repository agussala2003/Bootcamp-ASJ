import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  brand = 'Tu Socio';
  links = [
    {
      title: 'Home',
      path: './index',
    },
    {
      title: 'Products',
      path: './products',
    },
    {
      title: 'Contact Us',
      path: './contactus',
    }
  ];
}
