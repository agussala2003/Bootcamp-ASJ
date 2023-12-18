import { Component } from '@angular/core';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  faCircleDown = faCircleDown;
  flagDropdown:boolean = true;
  showProjects(){
    this.flagDropdown = !this.flagDropdown
  }
  constructor(private router:Router){}
  selectedpath(urlActive:string):boolean {
    return urlActive == this.router.url
  }
}
