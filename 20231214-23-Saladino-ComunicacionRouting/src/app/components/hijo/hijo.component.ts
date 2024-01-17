import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() datoEnviado: any = {};
  // @Input() otrodato: any = {};

  //Variabe al padre
  @Output() mensaje: EventEmitter<string>

  constructor(){
    this.mensaje = new EventEmitter
  }
  enviarMsj(){
    this.mensaje.emit("Hola esta es una emision")
  }
}
