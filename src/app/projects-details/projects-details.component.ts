import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Proyectos } from '../proyectos';
@Component({
  selector: 'app-projects-details',
  imports: [],
  template: `
    <section>
      <img class="listing-photo" [src]="proyectosList.imagenes">
      <h2 class="listing-heading">{{proyectosList.nombre}}</h2>
      <p class="listing-description">{{proyectosList.descripcion}}</p>
      <p class="listing-tecnologias">{{proyectosList.tecnologias}}</p>
    </section>
  
  `,
  styleUrl: './projects-details.component.css'
})
export class ProjectsDetailsComponent {
  @Input() proyectosList!:Proyectos;

}
