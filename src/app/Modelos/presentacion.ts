export class Presentacion {
    id: number;
    nombre: string;
    profesion: string;
    img: string;
    constructor(nombre: string, profesion: string, img: string) {
        this.nombre = nombre;
        this.profesion = profesion;
        this.img = img;
    }
}
