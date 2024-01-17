import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '20231214-23-Saladino-ComunicacionRouting';
  msjContenido: string = '';
  recibirMsj(msj:string){
    this.msjContenido = msj
  }
}
