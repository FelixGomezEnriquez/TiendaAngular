import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  productos: Producto[];
  responsiveOptions: any[] = [];

  constructor(private productsService: ProductsService) {
    productsService.leerBBDD().subscribe((res) => {
      this.productos = res;
      console.log(res);
    });
  }

  NgOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
