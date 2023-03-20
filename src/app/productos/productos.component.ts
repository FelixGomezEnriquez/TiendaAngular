import { Producto } from './../producto';
import { ProductsService } from './../products.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  products: Producto[];
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}
  ngOnInit() {
    this.productsService.leerBBDD().subscribe((res) => {
      this.products = res;
    });
  }
}
