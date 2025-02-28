export interface Proyectos {
    id: number;
    nombre: string;
    descripcion: string;
    // categoria: 'Web' | 'AI' | 'Data Analysis';
    categoria:  "Aplicaciones web" | "Aplicaciones móviles" |
                "Análisis de datos" | "Gestión de procesos y mejora continua";
    imagenes: string;
    tecnologias: string[];
}
