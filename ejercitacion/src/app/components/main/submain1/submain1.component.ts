import { Component } from '@angular/core';

@Component({
  selector: 'app-submain1',
  templateUrl: './submain1.component.html',
  styleUrl: './submain1.component.css'
})
export class Submain1Component {
  binding:string = '';
  optioning:number = 1;
  opt:number = 0;
  fecha = '';
  tareas: { Tarea: string, Fech: string }[] = [];
  tareasDeleted: { Tarea: string, Fech: string }[] = [];
  tareasChecked: { Tarea: string, Fech: string }[] = [];
  notShow: string[] = [];
  showChecked: boolean[] = [];
  list = {}
  addTask() {
    console.log(this.optioning)
    if (this.binding && this.fecha) {
      const task = {
        Tarea: this.binding,
        Fech: this.fecha
      };
      this.tareas.push(task);
      this.binding = '';
      this.fecha = '';
    }
  }
  removeTask(i:number){
    this.notShow[i] = 'd-none'
    this.tareasDeleted.push(this.tareas[i])
    console.log(this.tareasDeleted)
    this.tareas.splice(i, 0)
  }
  checkTask(i:number){
    this.showChecked[i] = true;
    this.tareasChecked.push(this.tareas[i])
  }
  changeOption(){
    console.log(this.optioning)
    this.opt = this.optioning;
  }
}
