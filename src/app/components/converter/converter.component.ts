import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent {
  cantidad = 0;
  tengo = 'NIO';
  quiero = 'USD';
  total = 0;

  monedas: string[] = ['NIO', 'USD', 'EUR', 'LIBRA'];

  convertir() {
    switch (this.tengo) {
      case 'NIO':
        if (this.quiero === 'NIO') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 0.027;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.026;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.023;
        }
        break;
      case 'USD':
        if (this.quiero === 'NIO') {
          this.total = this.cantidad * 36.40;
        }
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.93;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.83;
        }
        break;
      case 'EUR':
        if (this.quiero === 'NIO') {
          this.total = this.cantidad * 39.03;
        }
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.07;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.89;
        }
        break;
      case 'LIBRA':
        if (this.quiero === 'NIO') {
          this.total = this.cantidad * 43.84;
        }
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.2;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 1.12;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad;
        }
        break;
      default:
        //ALGO
        break;
    }
  }
}
