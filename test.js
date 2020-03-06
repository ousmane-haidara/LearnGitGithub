// Fonction standard
function hello(name) {

    return "Hello" + name;

}
// Fonction fléchées :
let Hello = (name) => {
    console.log(name);
     return "Hello " + name;
}

// On introduit la foncion map

const userNames = ["Mickey", "Leo", "Theo", "Raph", "Ous"];

// En JS, nous avons des fonctions associées au tableau
// ctrl + clic pour voir la doc de la méthode 

//let userGreetings = userNames.map(Hello);
//console.log(userGreetings);

// TypeScript && JavaScript

let printMessage = (object) => console.log(object.message);

let message = {
    user: "OSTH",
    message: "Hello"
}

printMessage(message);

message = "hello";

printMessage(message);

