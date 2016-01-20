/**
 * Created by dpedro on 1/19/2016.
 */
var Usuario = (function () {
    function Usuario() {
    }
    Usuario.prototype.calcularIMC = function () {
        return this._peso / (this._altura * this._altura);
    };
    Usuario.prototype.tieneSobrepeso = function () {
        return this.calcularIMC() > 500;
    };
    Usuario.prototype.agregarReceta = function (receta) {
        this.recetas.push(receta);
    };
    Object.defineProperty(Usuario.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "peso", {
        get: function () {
            return this._peso;
        },
        set: function (value) {
            this._peso = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "altura", {
        get: function () {
            return this._altura;
        },
        set: function (value) {
            this._altura = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "fecha", {
        get: function () {
            return this._fecha;
        },
        set: function (value) {
            this._fecha = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (value) {
            this._sexo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "comida", {
        get: function () {
            return this._comida;
        },
        set: function (value) {
            this._comida = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    return Usuario;
})();
exports.Usuario = Usuario;
var UsuarioBuilder = (function () {
    function UsuarioBuilder() {
        this.usuario = new Usuario();
    }
    UsuarioBuilder.prototype.setNombre = function (nombre) {
        this.usuario._nombre = nombre;
    };
    UsuarioBuilder.prototype.setPeso = function (peso) {
        this.usuario._peso = peso;
    };
    UsuarioBuilder.prototype.setAltura = function (altura) {
        this.usuario._altura = altura;
    };
    UsuarioBuilder.prototype.build = function () {
        return this.usuario;
    };
    return UsuarioBuilder;
})();
exports.UsuarioBuilder = UsuarioBuilder;
//# sourceMappingURL=Usuario.js.map