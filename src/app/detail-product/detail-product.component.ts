import { ProductsService } from './../products.service';
import { Component, Input } from '@angular/core';
import { Producto } from '../producto';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent {
  @Input() product: Producto;
  productInfo: any;
  name: string | null;
  display: boolean;
  val5: number = 3;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {
    this.name = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.productsService.leerBBDD().subscribe((res) => {
      this.productInfo = res.find((element) => element.name == this.name);
      console.log(this.productInfo);
    });
  }
  details(product: Producto) {
    this.router.navigate(['detail-product', product.name]);
  }
  add(product: Producto) {
    this.productsService.addProduct(product);
  }
}
