//const getTrianguleArea = (base, height) => (base * height /2);


//console.log (getTrianguleArea (10,3));
 
//const checkfisEven = (numero) => numero % 2 === 0;
//console.log (checkfisEven (3))

//const getRandomKoder = (kodersarray) => kodersarray [Math.floor(Math.random () * kodersarray.length)]

//console.log (getRandomKoder ([Juan]))


    const koders[
       { 
        name:"Angela Donaji",
        lastname:"Garcia Garcia"
        
       },
       {
        name: "Armando",
        lastname:"García Miranda"
      
       },
       
    ];

    const kodersN =[]
    const KodersA = []

    
    const KoderInitials = () => {
        koders.forEach(item =>{
            kodersN.push(item.name[0])
            KodersA.push(item.lastname[0])
            
           })
    }   
    

 
        KoderInitials()
        console.log(kodersN)
        console.log(KodersA)