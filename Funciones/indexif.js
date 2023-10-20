Function calculadoraDados (n1, n2){
        if (n1 > 6 && n2 > 6){
        console.log ("el dado debe tener 6 lados")
         }
        else if (n1===2 && n2===2){
         console.log ("la combinación es ganadora")
        }
        else if (n1===4 && n2===6){
         console.log ("la combinación es ganadora")
        }
        else if (n1===1 && n2===1){
         console.log ("la combinación es ganadora")
        }
        else {
         console.log("no es ganador")
        }

    }
     
     calculadoraDados (7,7);