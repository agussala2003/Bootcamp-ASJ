import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{
  calculatePrice = () => {
    this.totalPrice = 0;
    for(let i = 0; i < this.cartProducts.length; i++) {
      let price = parseFloat(this.cartProducts[i].price)
      console.log(price)
      this.totalPrice += this.stockProducts[i] * price;
    }
  }
  cartProducts:any[] = [];
  stockProducts: any [] = [];
  totalPrice:number = 0;
  flagAlert:boolean = false;
  constructor(public cartService: CarritoService){}
  ngOnInit(): void {
    this.cartProducts = this.cartService.getLocalStorage();
    for(let i = 0; i < this.cartProducts.length; i++) {
      this.stockProducts[i] = 1;
    }
    this.calculatePrice()
  }
  sumarStock(i:number) {
    this.stockProducts[i]++;
    this.calculatePrice();
  }
  restarStock(i:number) {
    this.stockProducts[i] > 1 ? this.stockProducts[i]-- : alert('La cantidad minima es 1')
    this.calculatePrice();
  }
  deleteProduct(i:number){
    this.cartService.deleteCartProduct(i);
    this.cartProducts = this.cartService.getLocalStorage();
    this.calculatePrice();
  }
  vaciarCarrito(){
    this.cartService.vaciarLocalStorage();
    this.cartProducts = this.cartService.getLocalStorage();
    this.calculatePrice();
    this.flagAlert = true;
    setTimeout(() => {
      this.flagAlert = false;
    },3000)
  }
}
