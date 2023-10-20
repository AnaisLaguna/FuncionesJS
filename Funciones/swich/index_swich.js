function nombreMascota (especie){
    switch (especie){
        case "perro":
            console.log("Milaneso")
            break;
        case "gato":
            console.log("Michiflais")
            break;
        case "ave":
            console.log("Piolín")
            break;
        default:
            console.log("no conozco esa especie.")
            break;
        }
    }
    
    nombreMascota ("perro");