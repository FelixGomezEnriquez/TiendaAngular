import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productos: Producto[];

  constructor() {
    this.productos = [
      {
        nombre: 'Bolso',
        precio: 20,
        imagen: 'https://source.unsplash.com/random/500x500/?handbag',
      },
      {
        nombre: 'Zapatos',
        precio: 50,
        imagen: 'https://source.unsplash.com/random/500x500/?shoes',
      },
      {
        nombre: 'Camiseta',
        precio: 15,
        imagen: 'https://source.unsplash.com/random/500x500/?t-shirt',
      },
      {
        nombre: 'Vestido',
        precio: 30,
        imagen: 'https://source.unsplash.com/random/500x500/?dress',
      },
      {
        nombre: 'Vaqueros',
        precio: 20,
        imagen: 'https://source.unsplash.com/random/500x500/?jeans',
      },
      {
        nombre: 'Chándal',
        precio: 60,
        imagen: 'https://source.unsplash.com/random/500x500/?tracksuit',
      },
      {
        nombre: 'Anillos',
        precio: 20,
        imagen: 'https://source.unsplash.com/random/500x500/?ring',
      },
      {
        nombre: 'Cinturon',
        precio: 10,
        imagen: 'https://source.unsplash.com/random/500x500/?belt',
      },
      {
        nombre: 'Chaqueta',
        precio: 40,
        imagen: 'https://source.unsplash.com/random/500x500/?jacket',
      },
    ];
  }

  leerBBDD(): Observable<Producto[]> {
    return of(this.productos);
  }
}
