import { Component } from '@angular/core';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

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
}
