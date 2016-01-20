/**
 * Created by dpedro on 1/19/2016.
 */

import {Receta} from "./Receta";

export class Usuario {
    _nombre: String;
    _peso: number;
    _altura: number;
    _fecha: Date;
    _sexo: String;
    _comida: Array<String>;
    _password: String;
    recetas: Array<Receta>;

    calcularIMC(): number {
        return this._peso / (this._altura * this._altura);
    }

    tieneSobrepeso(): Boolean {
        return this.calcularIMC() > 500;
    }

    agregarReceta(receta: Receta) {
        this.recetas.push(receta);
    }

    set nombre(value:String) {
        this._nombre = value;
    }

    set peso(value:number) {
        this._peso = value;
    }

    set altura(value:number) {
        this._altura = value;
    }

    set fecha(value:Date) {
        this._fecha = value;
    }

    set sexo(value:String) {
        this._sexo = value;
    }

    set comida(value:Array<String>) {
        this._comida = value;
    }

    set password(value:String) {
        this._password = value;
    }


    get nombre():String {
        return this._nombre;
    }

    get peso():number {
        return this._peso;
    }

    get altura():number {
        return this._altura;
    }

    get fecha():Date {
        return this._fecha;
    }

    get sexo():String {
        return this._sexo;
    }

    get comida():Array<String> {
        return this._comida;
    }

    get password():String {
        return this._password;
    }
}

export class UsuarioBuilder {

   private usuario: Usuario = new Usuario();

    setNombre(nombre: String) {
        this.usuario._nombre = nombre;
    }

    setPeso(peso: number) {
        this.usuario._peso = peso;
    }

    setAltura(altura: number) {
        this.usuario._altura = altura;
    }

    build(): Usuario {
        return this.usuario;
    }
}