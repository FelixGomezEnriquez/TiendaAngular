import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  products: Producto[];
  display: boolean;
  responsiveOptions: any[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {
    this.productsService.leerBBDD().subscribe((res) => {
      this.products = res;
      console.log(res);
    });
  }

  details(product: Producto) {
    this.router.navigate(['detail-product', product.name]);
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
  NgOnChange(){

  }
}
