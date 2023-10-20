
let people = [];

function CreatePerson(name, age, email) {
    let person = {};
    person.name = name;
    person.age = age;
    person.email = email;
    console.log(person);
    people.push(person);
    console.log(people);
}

CreatePerson("Anais Laguna",20, "al@gmail.com")
CreatePerson("Juan Perez", 40, "jp@gmail.com")

let koders = [
    {
      name: "Said Barrera",
      generation: 12,
      score: 9.2,
    },
    {
      name: "Helena Fuentes",
      generation: 8,
      score: 8.7,
    },
    {
      name: "Gerardo Cabrera",
      generation: 12,
      score: 9.9,
    },
    {
      name: "Brenda Guerrero",
      generation: 8,
      score: 8.4,
    },
    {
      name: "Alejandro Fuentes",
      generation: 7,
      score: 8.6,
    },
    {
      name: "Sandra Tellez",
      generation: 9,
      score: 9.9,
    },
  ];

  function scoreKoders(koders){
    let average = 0;
    let totalScore = 0;
    for (let i = 0; i < koders.length; i++) {

        average += koders[i].score;
    
    }
    totalScore = average / koders.length
    console.log(totalScore);
}

scoreKoders(koders);

function kodersplus9(koders) {
    return koders.filter(koder => koder.score > 9);
  }
  
  let koderswithplus9 = kodersplus9(koders);
  console.log("2.- Koders con score mayor que 9:");
  console.log(koderswithplus9);
  
  function koderCounter(koders,gen){
    let persCount = 0
    for (let i = 0; i < koders.length; i++) {
        koders[i].generation == gen ? persCount += 1 : persCount += 0
    }
    let result = persCount != 0 ? (`Hay ${persCount} personas en la generación ${gen}`) : ("No hay koders en esta generación.")
    console.log(result)
}

let gen = 12

koderCounter(koders,gen)