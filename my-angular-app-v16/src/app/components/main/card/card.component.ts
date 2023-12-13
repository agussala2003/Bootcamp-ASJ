import { Component } from '@angular/core';

interface Product {
  Name: string;
  Url: string;
  Category: string;
  Desc: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  products: Product[] = [
    {
      Name: 'Smartwatch',
      Url: '../../../../assets/img/Smartwach.avif',
      Category: 'Tech',
      Desc: 'Lorem ipsum dolor sit amet',
    },
    {
      Name: 'Licuadora',
      Url: '../../../../assets/img/Licuadora.avif',
      Category: 'Kitchen',
      Desc: 'Lorem ipsum dolor sit amet',
    },
    {
      Name: 'Monitor',
      Url: '../../../../assets/img/Monitor.avif',
      Category: 'Tech',
      Desc: 'Lorem ipsum dolor sit amet',
    },
    {
      Name: 'Heladera',
      Url: '../../../../assets/img/Heladera.avif',
      Category: 'Kitchen',
      Desc: 'Lorem ipsum dolor sit amet',
    },
    {
      Name: 'Teclado',
      Url: '../../../../assets/img/Teclado.avif',
      Category: 'Tech',
      Desc: 'Lorem ipsum dolor sit amet',
    },
    {
      Name: 'Sarten',
      Url: '../../../../assets/img/Sarten.avif',
      Category: 'Kitchen',
      Desc: 'Lorem ipsum dolor sit amet',
    },
    {
      Name: 'Horno',
      Url: '../../../../assets/img/Horno.avif',
      Category: 'Kitchen',
      Desc: 'Lorem ipsum dolor sit amet',
    },
    {
      Name: 'Auriculares',
      Url: '../../../../assets/img/Auris.avif',
      Category: 'Tech',
      Desc: 'Lorem ipsum dolor sit amet',
    },
  ];
  addFlag = false;
  techFlag = false;
  kitchenFlag = false;
  techProducts: Product[] = [];
  kitchenProducts: Product[] = [];
  filterTech() {
    this.techFlag = true;
    this.kitchenFlag = false;
    this.techProducts = this.products.filter(
      (item) => item.Category === 'Tech'
    );
  }
  filterKitchen() {
    this.techFlag = false;
    this.kitchenFlag = true;
    this.kitchenProducts = this.products.filter(
      (item) => item.Category === 'Kitchen'
    );
  }
  addProduct () {
    this.addFlag = true;
    setTimeout(() => {
      this.addFlag = false;
    },3000)
  }
}
