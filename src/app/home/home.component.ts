import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: 'inicio' },
      { label: 'Productos', icon: 'pi pi-fw pi-tags', routerLink: 'productos' },
    ];
    this.activeItem = this.items[0];
  }
}
