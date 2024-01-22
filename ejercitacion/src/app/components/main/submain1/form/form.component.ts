import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../../../../services/todolist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from '../../../../models/Tarea';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  constructor(private serviceTareas: TodolistService, private router: ActivatedRoute, private router2: Router) {}

  datosTarea = { 
    nombre: '', 
    descripcion: '', 
    estado: 1
  }

  idTarea:any;

  ngOnInit(): void {
    console.log(this.idTarea)
    this.router.params.subscribe((data) => {
      this.idTarea = data['idTarea'];
      if (this.idTarea !== undefined) {
        this.getTareaById(this.idTarea);
      }
    });
  }

  addTarea(){
    if (this.datosTarea.nombre && this.datosTarea.descripcion){
      this.serviceTareas.postTarea(this.datosTarea).subscribe((data) => {
      })
      this.router2.navigate(['/to-do-list']);
    }
    else {
      alert("Completa todos los campos");
    }
  }

  getTareaById(id:string) {
    this.serviceTareas.getTareaById(id).subscribe((data) => {
      this.datosTarea = data;
    })
  }
  
  updateTarea(id:string) {
    this.serviceTareas.putTarea(id,this.datosTarea).subscribe((data:Tarea) => {
      console.log(data)
    })
    this.router2.navigate(['/to-do-list']);
  }
}
