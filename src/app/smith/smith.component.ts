import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-smith',
  imports: [],
  templateUrl: './smith.component.html',
  styleUrl: './smith.component.css',
  animations: [
    trigger('fadeDown', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })), // Estado inicial
      transition(':enter', [ // Animación al entrar
        animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [ // Animación al salir
        animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ]),
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })), // Estado inicial
      transition(':enter', [ // Animación al entrar
        animate('0.5s ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [ // Animación al salir
        animate('0.5s ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SmithComponent {

}
