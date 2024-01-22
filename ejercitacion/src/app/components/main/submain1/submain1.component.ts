import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../../../services/todolist.service';
import { catchError, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-submain1',
  templateUrl: './submain1.component.html',
  styleUrl: './submain1.component.css'
})
export class Submain1Component implements OnInit {
  constructor(private serviceTareas: TodolistService) {}
  binding:string = '';
  fecha = '';
  tareas: { 
    id: string,
    nombre: string, 
    descripcion: string, 
    estado: number
  }[] = [];

  datosTarea = { 
    nombre: '', 
    descripcion: '', 
    estado: 1
  }

  ngOnInit(): void {
    this.refreshTareas();
  }

  refreshTareas(){
    this.serviceTareas.getTareas().subscribe((data) =>{
      console.log("Showing all tasks" + data)
      this.tareas = data.filter((item:any) => item.estado === 1);
    })
  }

  deleteTarea(id:string) {
    this.serviceTareas.deleteTarea(id).subscribe((data) => {
      console.log(data);
      this.refreshTareas();
    }) 
  }

  changeTareaState(id: string, state: number) {
    this.serviceTareas.getTareaById(id)
      .pipe(
        switchMap((data) => {
          this.datosTarea = data;
          this.datosTarea.estado = state;
          console.log(this.datosTarea);
          return this.serviceTareas.putTarea(id, this.datosTarea);
        })
      )
      .subscribe(() => {
        this.refreshTareas();
      });
  }
  

  filterTareas(state:number) {
    this.serviceTareas.getTareas().subscribe((data) =>{
      console.log("Showing filter tasks" + data)
      this.tareas = data.filter((item:any) => item.estado === state);
    })
  }

}
