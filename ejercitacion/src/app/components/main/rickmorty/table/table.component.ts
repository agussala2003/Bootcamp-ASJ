import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../../../../services/rickandmorty.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  numId: number = 0;
  constructor(public servicio:RickandmortyService){}
  personajesFull: any = [];
  ngOnInit(): void {
    this.servicio.getDatosAPI().subscribe((data) => {
    this.personajesFull = data
    })
  }
}
