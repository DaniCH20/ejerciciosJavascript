class descarga{
    constructor(color, residuo , kg, nombre){
        this.color=color;
        this.residuo=residuo;
        this.kg=kg;
        this.nombre=nombre;
    }
    get getColor(){
        return this.color;
    }
    set setColor(nuevoColor){
        this.color=nuevoColor;
    }
    get getResiduo(){
        return this.residuo;
    }
    set setResiduo(nuevoResiduo){
        this.residuo=nuevoResiduo;
    }
    get getKg(){
        return this.kg;
    }
    set setKg(nuevoKg){
        this.kg=nuevoKg;
    }
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }
    
    tostring(){
        return `El contenedor de color ${this.color} es para ${this.residuo}, tiene una capacidad de ${this.kg} kg y su nombre es ${this.nombre}`;
    }
}