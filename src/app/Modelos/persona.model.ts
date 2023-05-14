export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;
    constructor(nombre: string, apellido: string, img: string, descripcion: string){
        this.nombre =  nombre;
        this.descripcion = descripcion;
        this.apellido = apellido;
        this.img = img;
    }
}