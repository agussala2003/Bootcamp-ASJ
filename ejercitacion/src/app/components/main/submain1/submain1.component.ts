import { Component } from '@angular/core';

@Component({
  selector: 'app-submain1',
  templateUrl: './submain1.component.html',
  styleUrl: './submain1.component.css'
})
export class Submain1Component {
  binding:string = '';
  opt:number = 0;
  fecha = '';
  tareas: { Tarea: string, Fech: string, State:number, Clase: string }[] = [];
  tareasFilter: { Tarea: string, Fech: string, State:number, Clase: string }[] = [];
  notShow: string[] = [];
  showChecked: boolean[] = [];
  list = {}
  addTask() {
    if (this.binding && this.fecha) {
      const task = {
        Tarea: this.binding,
        Fech: this.fecha,
        State: 1,
        Clase: 'container bg-light mt-4 rounded-3 py-3'
      };
      this.tareas.push(task);
      this.tareasFilter.push(task);
      this.binding = '';
      this.fecha = '';
    }
  }
  removeTask(i:number){
    this.tareas[i].State = 3
    this.tareas[i].Clase = 'container bg-danger-subtle mt-4 rounded-3 py-3'
  }
  checkTask(i:number){
    this.tareas[i].State = 2
    this.tareas[i].Clase = 'container bg-success-subtle mt-4 rounded-3 py-3'
  }
  changeOption(i:number){
    this.opt = i;
    console.log(this.opt)
    if(this.opt == 1){
      this.tareas = this.tareasFilter
      console.log(this.tareas)
      console.log(this.tareasFilter)
    }
    else if(this.opt == 2){
      this.tareas = this.tareasFilter.filter(item => item.State == 2)
      console.log(this.tareas)
      console.log(this.tareasFilter)
    }
    else if(this.opt == 3) {
      this.tareas = this.tareasFilter.filter(item => item.State == 3)
      console.log(this.tareas)
      console.log(this.tareasFilter)
    }
  }
}
