import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css'],
})
export class CestaComponent {
  @Input() display: boolean;
  @Output() changeDisplay = new EventEmitter<boolean>();

  close() {
    this.display = false;
    this.changeDisplay.emit(this.display);
  }
}
