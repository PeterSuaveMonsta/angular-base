import { Component } from '@angular/core';

@Component({
  selector: 'app-counter', // Selector para usar el componente en templates
  template: `
    <h3>counter: {{ counter }}</h3>

    <!-- Botones que llaman a métodos cuando se hace clic -->
    <button (click)="increaseby(1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="decreaseby(1)">-1</button>
  `
})
export class CounterComponent {
  public counter: number = 0; // Inicialización del contador

  // Método para aumentar el contador
  increaseby(value: number): void {
    this.counter += value;
  }

  // Método para disminuir el contador
  decreaseby(value: number): void {
    this.counter -= value;
  }

  // Método para restablecer el contador
  resetCounter(): void {
    this.counter = 0;
  }
}
