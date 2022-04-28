/**
 * Clase Controller
 * se encarga de enlazar los datos con la interface de usuario
 * en nuestro caso, enlaza los objetos del Model con el HTML
 * 
 * @field model encargado de los datos
 * @field view encargada del html
 */
class Controller {

    constructor(model, view) {
        // recojemos el objeto que maneja los datos
        this.model = model

        // recojemos el objeto que maneja el html
        this.view = view

        // instanciamos un coche en particular
        // y lo añadimos al array del model
        const fiatNuevo = this.model.addCar("Fiat")

        // construimos los mandos
        this.view.creaMandos(fiatNuevo);

        // enlazamos los eventos de acelerar y frenar
        this.view.bindAceleraCoche(this.handleAumentaVelocidad.bind(this))

        // no necesitamos usar bind(this) si usamos las "arrow functions"
        // en la definicion del handle
        this.view.bindFrenaCoche(this.handleDisminuyeVelocidad)

    }

    /* Estos son los manejadores (handle) que se encargan de utilizar el Model */

    /**
     * Acelera el coche, para eso usamos el Model
     * @param modelo coche que queremos acelerar
     * @param valor incremento de velocidad
     */
    handleAumentaVelocidad(modelo, valor) {
        // recojemos el coche que queremos acelerar
        // y utilizamos su método acelerar para cambiar la velocidad
        const nuevaVelocidad = this.model.getCar(modelo).acelerar(valor)

        // actualizamos el valor en el HTML
        app.view.displayVelocity(modelo, nuevaVelocidad)
    }

    /**
     * Frena el coche, para eso usamos el Model
     * @param modelo coche que queremos frenar
     * @param valor decremento de velocidad
     */
    /* handleDisminuyeVelocidad(modelo, valor) {
        // recojemos el coche que queremos frenar
        // y utilizamos su método frenar para cambiar la velocidad
        this.model.getCar(modelo).frenar(valor)
    } */

    // esta sería otra nomencaltura que simplifica el codigo
    // se denomina "arrow functions"
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    handleDisminuyeVelocidad = (modelo, valor) => {
        // recojemos el coche que queremos frenar
        // y utilizamos su método frenar para cambiar la velocidad
        const nuevaVelocidad = this.model.getCar(modelo).frenar(valor)

        // actualizamos el valor en el HTML
        app.view.displayVelocity(modelo, nuevaVelocidad)
    }

}

// lanzamos la aplicacion, el objeto app de la clase controller
const app = new Controller(new Model, new View)