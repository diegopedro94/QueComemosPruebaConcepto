/**
 * Created by dpedro on 1/20/2016.
 */
var Receta = (function () {
    function Receta() {
    }
    Receta.prototype.crearReceta = function (usuario) {
        this.puedeSerCreada();
        usuario.agregarReceta(this);
    };
    Receta.prototype.puedeSerCreada = function () {
        if (this.ingredientes.length === 0) {
            throw new Error("No se puede crear");
        }
        this;
    };
    return Receta;
})();
exports.Receta = Receta;
//# sourceMappingURL=Receta.js.map