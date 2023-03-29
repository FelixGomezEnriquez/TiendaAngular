import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Producto[];
  addedProducts: Producto[] = [];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Bolso',
        price: 20,
        image: 'https://source.unsplash.com/random/500x500/?handbag',
        description: 'Bolso de piel',
      },
      {
        id: 2,
        name: 'Zapatos',
        price: 50,
        image: 'https://source.unsplash.com/random/500x500/?shoes',
        description: 'Zaaptos gucci',
      },
      {
        id: 3,
        name: 'Camiseta',
        price: 15,
        image: 'https://source.unsplash.com/random/500x500/?t-shirt',
        description: 'Camiseta luis vutin',
      },
      {
        id: 4,
        name: 'Vestido',
        price: 30,
        image: 'https://source.unsplash.com/random/500x500/?dress',
        description: 'Vestido versacce',
      },
      {
        id: 5,
        name: 'Vaqueros',
        price: 20,
        image: 'https://source.unsplash.com/random/500x500/?jeans',
        description: 'Vaqueros nuevos',
      },
      {
        id: 6,
        name: 'Chándal',
        price: 60,
        image: 'https://source.unsplash.com/random/500x500/?tracksuit',
        description: 'Chandal nike ',
      },
      {
        id: 7,
        name: 'Anillos',
        price: 20,
        image: 'https://source.unsplash.com/random/500x500/?ring',
        description: 'Anillo 23kilates',
      },
      {
        id: 8,
        name: 'Cinturon',
        price: 10,
        image: 'https://source.unsplash.com/random/500x500/?belt',
        description: 'Cinturon POLO',
      },
      {
        id: 9,
        name: 'Chaqueta',
        price: 40,
        image: 'https://source.unsplash.com/random/500x500/?jacket',
        description: 'Chaqueta de cuero',
      },
    ];

    this.cargarDatos();
  }

  leerBBDD(): Observable<Producto[]> {
    return of(this.products);
  }

  addProduct(product: Producto) {
    if (product.quantity != undefined) {
      let productoañadido: Producto | undefined = this.addedProducts.find(
        (element) => element.id == product.id
      );
      productoañadido != undefined && productoañadido.quantity != undefined
        ? (productoañadido.quantity += 1)
        : null;
    } else {
      product.quantity = 1;
      this.addedProducts.push(product);
    }
    this.guardarDatos();
    console.log(product);
  }

  readAddedProducts(): Observable<Producto[]> {
    console.log(this.addedProducts);
    //prueba
    return of(this.addedProducts);
  }

  cargarDatos() {
    let datos = localStorage.getItem('datos');
    let productosAnteriores;
    if (datos != null) {
      productosAnteriores = JSON.parse(datos);
    }

    if (productosAnteriores != null) {
      this.addedProducts = productosAnteriores;
    }
  }

  guardarDatos() {
    //Guardar datos en local
    let cadenaJSON = JSON.stringify(this.addedProducts);
    localStorage.setItem('datos', cadenaJSON);
    console.log(cadenaJSON);
  }
}
