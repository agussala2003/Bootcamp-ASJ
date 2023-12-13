import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  products = [
    {
      Name: 'Producto 1',
      Url: 'https://dummyimage.com/600x400/000/fff',
      Desc: 'Lorem ipsum dolor sit amet'
    },
    {
      Name: 'Producto 2',
      Url: 'https://dummyimage.com/600x400/000/fff',
      Desc: 'Lorem ipsum dolor sit amet'
    },
    {
      Name: 'Producto 3',
      Url: 'https://dummyimage.com/600x400/000/fff',
      Desc: 'Lorem ipsum dolor sit amet'
    },
    {
      Name: 'Producto 4',
      Url: 'https://dummyimage.com/600x400/000/fff',
      Desc: 'Lorem ipsum dolor sit amet'
    },
    {
      Name: 'Producto 5',
      Url: 'https://dummyimage.com/600x400/000/fff',
      Desc: 'Lorem ipsum dolor sit amet'
    },
    {
      Name: 'Producto 6',
      Url: 'https://dummyimage.com/600x400/000/fff',
      Desc: 'Lorem ipsum dolor sit amet'
    },
    {
      Name: 'Producto 7',
      Url: 'https://dummyimage.com/600x400/000/fff',
      Desc: 'Lorem ipsum dolor sit amet'
    },
    {
      Name: 'Producto 8',
      Url: 'https://dummyimage.com/600x400/000/fff',
      Desc: 'Lorem ipsum dolor sit amet'
    }
  ]
}
