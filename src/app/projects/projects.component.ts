import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosService } from '../proyectos.service';
import { Proyectos } from '../proyectos';
import { ProjectsDetailsComponent } from '../projects-details/projects-details.component';
import { Categorias } from '../../models/categorias.enum';

@Component({
  selector: 'app-projects',
  imports: [CommonModule,ProjectsDetailsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent{
  proyectosList: Proyectos[]=[];
  proyectosService: ProyectosService = inject(ProyectosService)
  categorias: Categorias[] = Object.values(Categorias)
  categoriaSeleccionada: string = "Todos";
  
  constructor(){
    this.proyectosList= this.proyectosService.getProyectos();// this accede a la propiedad
  }
 
  seleccionarCategoria(categoria: string) {
    if (this.categoriaSeleccionada != categoria) {
      this.categoriaSeleccionada = categoria;
      // Modificar ProyectList con los que sean de la categoría seleccionada
      this.modificarProyectosList();   
    } else {
      this.categoriaSeleccionada = "Todos";
      // Trae todos los proyectos otra vez si se vuelve a hacer clic en la misma categoría
      this.proyectosList= this.proyectosService.getProyectos();
    }
    console.log(this.categoriaSeleccionada)

    
  } 

  modificarProyectosList() {
    this.proyectosList= this.proyectosService.getProyectos();
    this.proyectosList = this.proyectosList.filter(proyecto => proyecto.categoria == this.categoriaSeleccionada) 
    console.log(this.proyectosList)
  }

}
