import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosService } from '../proyectos.service';
import { Proyectos } from '../proyectos';
import { ProjectsDetailsComponent } from '../projects-details/projects-details.component';

@Component({
  selector: 'app-projects',
  imports: [CommonModule,ProjectsDetailsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent{
  proyectosList: Proyectos[]=[];
  proyectosService:ProyectosService = inject(ProyectosService)
  //categorias: string[] =['Web', 'AI', 'Data Analysis'];
  //categoriaSeleccionada: string= 'Web';
  
  constructor(){
    this.proyectosList= this.proyectosService.getProyectos();// this accede a la propiedad
  }
 


}
