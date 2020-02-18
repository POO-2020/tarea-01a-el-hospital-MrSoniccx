import Nombre from "./nombre.js"
import Doctor from "./doctor.js"

class Main{

    constructor(){
        this.testPepe = new Nombre("pepe","jorge","rodrigo")
        this.testDoct = new Doctor(this.testPepe,"master","3124573641","cedulaxD")
    }

    testNombre(){
        
        console.log(this.testPepe.getNombreCompleto())
        console.log(this.testPepe.getApellidoNombre())
        console.log(this.testPepe.getIniciales())

    }

    testDoc(){
        console.log(this.testDoct.getPerfil())
    }
}

let test = new Main();
test.testNombre();
test.testDoc();