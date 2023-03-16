const db = require('../util/database');

/*const hot_cakes = [
    {
        nombre: "nutella",
        imagen: "https://www.keyingredient.com/media/09/82/b08496cd78ddbd4bdda4f441160ddc6d4b15.jpg/rh/japanese-hot-cake.jpg",
        descripcion: "Crepa con nutella",
        handle: "@nutella",
        ingredientes: "harina, claras de huevo, mantequilla, polvo para hornear, azúcar, nutella",
        precio: "75",
    },
    {
        nombre: "philadelphia con jamon",
        imagen: "https://themerrymakersisters.com/wp-content/uploads/2017/01/BREKKY-FUNDAY-HOTCAKES-LANDSCAPE.jpg",
        descripcion: "Crepa rica de philadelphia con jamon ",
        handle: "@philadelphia",
        ingredientes: "harina, huevo, mantequilla, philadelphia, jamon ",
        precio: "90",
    },
    {
        nombre: "nutella con platano",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Crepa rica de nutella con platano",
        handle: "@platano",
        ingredientes: "harina, huevo, mantequilla, nutella, platano",
        precio: "85",
    },
    {
        nombre: "gouda con pepperoni",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Crepa de queso gouda co pepperoni",
        handle: "@gouda",
        ingredientes: "harina, huevo, mucha mantequilla, leche, gouda, pepperoni",
        precio: "105",
    },
    {
        nombre: "nutella con fresa",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Crepa de nutella con fresa",
        handle: "@fresa",
        ingredientes: "harina, huevo, mantequilla, nutella, fresa",
        precio: "95",
    },
    {
        nombre: "crepa de rollito nutella fresa",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
        descripcion: "Crepa rica de rollito nutella fresa",
        handle: "@rollito",
        ingredientes: "harina, huevo, mantequilla, leche, nutella, fresa",
        precio: "110",
    },
];*/

module.export = class Crepa{
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_crepa) {
        this.nombre = mi_crepa.nombre || "Lechera";
        this.imagen = mi_crepa.imagen || "https://bulma.io/images/placeholders/1280x960.png";
        this.descripcion = mi_crepa.descripcion || "Una deliciosa crepa de lechra";
        this.handle = mi_crepa.handle|| "@lechera";
        this.ingredientes = mi_crepa.ingredientes || "mantequilla, harina, huevo y leche, lechera";
        this.precio = mi_crepa.precio || "80";
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            `INSERT INTO crepas(nombre, imagen, descripcion, handle, precio) 
            VALUES(?, ?, ?, ?, ?)`,
            [this.nombre, this.imagen, this.descripcion, this.handle, this.precio]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetch(id) {
        let query = `SELECT * FROM crepas`;
        if (id != 0) {
            query += ' WHERE id = ?'
            return db.execute(query, [id]);
        } 
        return db.execute(query);
    }
}

