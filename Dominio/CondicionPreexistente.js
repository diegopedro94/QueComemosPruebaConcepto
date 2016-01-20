/**
 * Created by dpedro on 1/20/2016.
 */
var CondicionCeliaco = (function () {
    function CondicionCeliaco() {
    }
    CondicionCeliaco.prototype.valido = function (usuario) {
        return true;
    };
    CondicionCeliaco.prototype.tieneRutinaSaludable = function (usuario) {
        return true;
    };
    CondicionCeliaco.prototype.tolera = function (usuario) {
        return true;
    };
    return CondicionCeliaco;
})();
exports.CondicionCeliaco = CondicionCeliaco;
var CondicionDiabetico = (function () {
    function CondicionDiabetico() {
    }
    CondicionDiabetico.prototype.valido = function (usuario) {
        if (usuario._sexo) {
            throw Error("El campo no se declaró");
        }
        return true;
    };
    CondicionDiabetico.prototype.tieneRutinaSaludable = function (usuario) {
        return usuario._altura.valueOf() === 20;
    };
    CondicionDiabetico.prototype.tolera = function (usuario) {
        return false;
    };
    return CondicionDiabetico;
})();
exports.CondicionDiabetico = CondicionDiabetico;
var CondicionHipertenso = (function () {
    function CondicionHipertenso() {
    }
    CondicionHipertenso.prototype.valido = function (usuario) {
        return false;
    };
    CondicionHipertenso.prototype.tieneRutinaSaludable = function (usuario) {
        return true;
    };
    CondicionHipertenso.prototype.tolera = function (usuario) {
        return true;
    };
    return CondicionHipertenso;
})();
exports.CondicionHipertenso = CondicionHipertenso;
//# sourceMappingURL=CondicionPreexistente.js.map