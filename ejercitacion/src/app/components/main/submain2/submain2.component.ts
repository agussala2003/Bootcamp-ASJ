import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submain2',
  templateUrl: './submain2.component.html',
  styleUrl: './submain2.component.css',
})
export class Submain2Component {
  personaje: string = '';
  profPersonaje: string = '';
  imgPersonaje: string = '';
  arrayPersonajes: PersonajesModel[] = [];
  agregarPersonaje() {
    if (this.imgPersonaje && this.personaje && this.profPersonaje) {
      const tempList = {
        Nombre: this.personaje,
        Url: this.imgPersonaje,
        Profesion: this.profPersonaje,
      };
      this.arrayPersonajes.push(tempList);
      this.personaje = '';
      this.imgPersonaje = '';
      this.profPersonaje = '';
    }
  }

  // Para la ruta dinamica
  // constructor(private ruta:ActivatedRoute){}
  // parametroURL = this.ruta.snapshot.params['idProducto']
}
type PersonajesModel = {
  Nombre: string;
  Url: string;
  Profesion: string;
};
