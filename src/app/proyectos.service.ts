import { Injectable } from '@angular/core';
import { Proyectos } from './proyectos.js'
import { Categorias } from '../models/categorias.enum.js'

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  constructor() { }
  protected proyectosList: Proyectos[]=[
    {
      id: 1,
      nombre: 'BUOOOOOOOOOOOOOO',
      descripcion: 'Desarrollo de una plataforma de comercio electrónico con Angular y Node.js.',
      categoria: Categorias.Aplicaciones_Móviles,
      imagenes: 'https://images.unsplash.com/photo-1739582814657-10931286d7a5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tecnologias: ['Angular', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      nombre: 'Nombre',
      descripcion: 'Desarrollo de una plataforma de comercio electrónico con Angular y Node.js.',
      categoria: Categorias.Aplicaciones_Web,
      imagenes: 'https://images.unsplash.com/photo-1739761613270-a48d0d1190ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tecnologias: ['Angular', 'Node.js', 'MongoDB'],
    },
    {
      id: 3,
      nombre: 'dattttaaaaaaaaaa',
      descripcion: 'Desarrollo de una plataforma de comercio electrónico con Angular y Node.js.',
      categoria: Categorias.Análisis_de_Datos,
      imagenes: 'assets/imageshttps://plus.unsplash.com/premium_photo-1675088136288-7ad7f7682d54?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/ecommerce.jpg',
      tecnologias: ['Angular', 'Node.js', 'MongoDB'],
    },
    {
      id: 4,
      nombre: 'mobilllllllll',
      descripcion: 'Desarrollo de una plataforma de comercio electrónico con Angular y Node.js.',
      categoria: Categorias.Gestión_Procesos,
      imagenes: 'assets/imageshttps://plus.unsplash.com/premium_photo-1675088136288-7ad7f7682d54?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/ecommerce.jpg',
      tecnologias: ['Angular', 'Node.js', 'MongoDB'],
    },
    {
      id: 5,
      nombre: 'mobilllllllll2222222',
      descripcion: 'Desarrollo de una plataforma de comercio electrónico con Angular y Node.js.',
      categoria: Categorias.Aplicaciones_Móviles,
      imagenes: 'assets/imageshttps://plus.unsplash.com/premium_photo-1675088136288-7ad7f7682d54?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/ecommerce.jpg',
      tecnologias: ['Angular', 'Node.js', 'MongoDB'],
    },
    
  ];

  // funciones
  getProyectos(): Proyectos[]{   // para traer todas los proyectos
    return this.proyectosList;
  }
  
  getProyectosPorCategoria(categoria: string): Proyectos[]{
    return this.proyectosList.filter(proyectosList => proyectosList.categoria === categoria);
  }

  
}
