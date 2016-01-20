/**
 * Created by dpedro on 1/20/2016.
 */

import {Usuario} from "./Usuario";

interface CondicionPreexistente {
    valido(usuario: Usuario): Boolean;
    tieneRutinaSaludable(usuario: Usuario): Boolean;
    tolera(usuario: Usuario): Boolean;
}

export class CondicionCeliaco implements CondicionPreexistente {
    valido(usuario:Usuario):Boolean {
        return true;
    }

    tieneRutinaSaludable(usuario:Usuario):Boolean {
        return true;
    }

    tolera(usuario:Usuario):Boolean {
        return true;
    }

}

export class CondicionDiabetico implements CondicionPreexistente {
    valido(usuario:Usuario):Boolean {
       if(usuario._sexo) {
           throw Error("El campo no se declaró");
       }
        return true;
    }

    tieneRutinaSaludable(usuario:Usuario):Boolean {
        return usuario._altura.valueOf() === 20;
    }

    tolera(usuario:Usuario):Boolean {
        return false;
    }

}

export class CondicionHipertenso implements CondicionPreexistente {
    valido(usuario:Usuario):Boolean {
        return false;
    }

    tieneRutinaSaludable(usuario:Usuario):Boolean {
        return true;
    }

    tolera(usuario:Usuario):Boolean {
        return true;
    }

}