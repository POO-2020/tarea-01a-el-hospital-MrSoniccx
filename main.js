import Nombre from "./nombre.js"
import Doctor from "./doctor.js"
import Paciente from "./paciente.js"
import Fecha from "./fecha.js"
import Cita from "./cita.js"
import Tiempo from "./tiempo.js"

class Main{//${this.}

    constructor(){
        this.testPepe = new Nombre("pepe","jorge","rodrigo")
        this.testDoct = new Doctor(this.testPepe,"master","3124573641","cedulaxD")
        this.paciente = new Paciente(this.testPepe,new Fecha(new Date(2002,5,20)),"312-526-2456")
        this.testTiempo = new Tiempo(7,53,"am")
        this.testCitaa = new Cita (new Fecha(new Date(2002,5,20)),this.testTiempo,this.testDoct,this.paciente)
    }

    testNombre(){
        
        console.log(this.testPepe.getNombreCompleto())
        console.log(this.testPepe.getApellidoNombre())
        console.log(this.testPepe.getIniciales())

    }

    testDoc(){
        console.log(this.testDoct.getPerfil())
    }

    testPac(){
        console.log(this.paciente.getPerfil())
    }
    testCita(){
        console.log(this.testCitaa.getCita())
    }
}

let test = new Main();
test.testNombre();
test.testDoc();
test.testPac();
test.testCita();