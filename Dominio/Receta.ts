/**
 * Created by dpedro on 1/20/2016.
 */

import {Usuario} from "./Usuario";
import {Ingrediente} from "./Caracteristica";
import {Condimento} from "./Caracteristica"

export class Receta {
    nombrePlato: String;
    ingredientes: Array<Ingrediente>;
    condimentos: Array<Condimento>;

    crearReceta(usuario: Usuario) {
        this.puedeSerCreada();
        usuario.agregarReceta(this);
    }

    puedeSerCreada() {
        if(this.ingredientes.length === 0) {
            throw new Error("No se puede crear");
        }
        this
    }
}