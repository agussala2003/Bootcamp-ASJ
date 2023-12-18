import { Component, Input, OnInit } from '@angular/core';
import { RickandmortyService } from '../../../../../services/rickandmorty.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  idCharacter:string | null = '';
  personaje: any = [];
  
  constructor(public servicio:RickandmortyService, public route: ActivatedRoute){}
  ngOnInit(): void {
    this.idCharacter = this.route.snapshot.paramMap.get('idCharacter');
    // Verificar si idCharacter no es null antes de convertirlo a número y hacer la solicitud
    if (this.idCharacter !== null) {
        this.servicio.getDatosAPICharacter(parseInt(this.idCharacter)).subscribe((data) => {
        this.personaje = data;
      });
    }
  }
}
