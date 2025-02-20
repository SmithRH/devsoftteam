export interface Proyectos {
    id: number;
    nombre: string;
    descripcion: string;
    categoria: 'Web' | 'AI' | 'Data Analysis';
    imagenes: string;
    tecnologias: string[];
}
