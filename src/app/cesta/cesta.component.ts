import { ProductsService } from './../products.service';
import { Producto } from './../producto';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css'],
})
export class CestaComponent {
  @Input() display: boolean;
  @Output() changeDisplay = new EventEmitter<boolean>();
  addedProducts: Producto[];
  total: number = 0;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.route.params.subscribe((params) => {
      let display = params['display'];
      this.display = display;
    });
    this.productsService.readAddedProducts().subscribe((res) => {
      this.addedProducts = res;
      console.log(this.addedProducts);
    });
    this.calcularTotal();
  }

  calcularTotal() {
    let totalProducto;
    let totales: any[] = [];
    this.addedProducts.forEach((element) => {
      element.quantity != null
        ? (totalProducto = element.price * element.quantity)
        : (totalProducto = element.price);
      totales.push(totalProducto);
    });

    totales.forEach((element) => {
      console.log(element);
      this.total += element;
      console.log(this.total);
    });
    console.log(this.total);
  }
  close() {
    this.display = false;
    this.changeDisplay.emit(this.display);
    this.location.back();
  }
}
