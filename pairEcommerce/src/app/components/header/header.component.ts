import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(public cartService: CarritoService) {}
  cantProd: number = 0;
  ngOnInit(): void {
    this.cantProd = this.cartService.getLocalStorage().length;
    console.log(this.cantProd)
  }
}
