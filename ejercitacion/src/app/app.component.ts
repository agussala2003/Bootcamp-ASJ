import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sidebarFlag: boolean = true;
  sidebarChanger() {
    this.sidebarFlag = !this.sidebarFlag
  }
}
