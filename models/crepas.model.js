module.export = class Crepa{
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_crepa) {
        this.nombre = mi_crepa.nombre || "Nutella";
        this.imagen = mi_crepa.imagen || "https://bulma.io/images/placeholders/1280x960.png";
        this.descripcion = mi_crepa.descripcion || "Una deliciosa crepa";
        this.handle = mi_crepa.handle|| "@crepa";
        this.ingredientes = mi_crepa.ingredientes || "mantequilla, harina, huevo y leche, Nutella";
        this.precio = mi_crepa.precio || "75";
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        
    }

}
