import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Producto[];

  constructor() {
    this.products = [
      {
        name: 'Bolso',
        price: 20,
        image: 'https://source.unsplash.com/random/500x500/?handbag',
        description: 'Bolso de piel',
      },
      {
        name: 'Zapatos',
        price: 50,
        image: 'https://source.unsplash.com/random/500x500/?shoes',
        description: 'Zaaptos gucci',
      },
      {
        name: 'Camiseta',
        price: 15,
        image: 'https://source.unsplash.com/random/500x500/?t-shirt',
        description: 'Camiseta luis vutin',
      },
      {
        name: 'Vestido',
        price: 30,
        image: 'https://source.unsplash.com/random/500x500/?dress',
        description: 'Vestido versacce',
      },
      {
        name: 'Vaqueros',
        price: 20,
        image: 'https://source.unsplash.com/random/500x500/?jeans',
        description: 'Vaqueros nuevos',
      },
      {
        name: 'Chándal',
        price: 60,
        image: 'https://source.unsplash.com/random/500x500/?tracksuit',
        description: 'Chandal nike ',
      },
      {
        name: 'Anillos',
        price: 20,
        image: 'https://source.unsplash.com/random/500x500/?ring',
        description: 'Anillo 23kilates',
      },
      {
        name: 'Cinturon',
        price: 10,
        image: 'https://source.unsplash.com/random/500x500/?belt',
        description: 'Cinturon POLO',
      },
      {
        name: 'Chaqueta',
        price: 40,
        image: 'https://source.unsplash.com/random/500x500/?jacket',
        description: 'Chaqueta de cuero',
      },
    ];
  }

  leerBBDD(): Observable<Producto[]> {
    return of(this.products);
  }
}
