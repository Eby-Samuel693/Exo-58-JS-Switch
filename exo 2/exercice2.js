let fruits = prompt("fruits vaut ?");
fruits = parseInt(fruits);
switch(fruits) {

    case "Banana":
        alert("Hello");
        break;
    case "Apple":
        alert("Welcome");
        break;
    default:
        alert("aucun des deux si la variable fruits n'est pas defini a banana ou apple");
        console.log("aucun des deux si la variable fruits n'est pas defini a banana ou apple");
}