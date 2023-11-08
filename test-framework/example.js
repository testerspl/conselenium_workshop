

const osoby = [
	'Jan Kowalski',
	'Mateusz Buła',
	'Filip Konopka',
	[1, 2, 3, ['Krzysztof', ['lista', 2, 3]]],
];

/* Stwórz obiekt o nazwie 'library', który będzie zawierał 3 klucze (książki).
Wartość każdego klucza to obiekt zawierający następujące wpisy jako kolejne
klucze: Tytuł, Autor, Data wydania, Ilość stron.
Wartością każdego klucza: Tytuł, Autor, Data wydania, Ilość stron, powinna 
być lista w której znajdą się odpowiednie wpisy.
Wylogować w konsoli wartości dla każdej z książek: Tytuł, Autor, Data wydania,
Ilość stron
*/


//
let library = {
    book1: {
        Tytuł: ['Czarny kot'],
        Autor: ['E. Allan Poe'],
        Datawydania: ['1900'],
        Ilośćstron: ['130']
    },
}

console.log(`${library.book1.Tytuł[0]}
${library.book1.Ilośćstron[0]}
${library.book1.Datawydania[0]}
${library.book1.Autor[0]}`)




 let test50 = (x= 25, y = 25) => ((x == 50 || y == 50) || (x + y == 50))


function getName (myName = 'Krzysztof')  {

return myName
}

function getNewName () {

// ``

let first = getName().substr(0, 1).toLowerCase()

console.log(`${first}rzysztof`)
}







let a = {

todoAdd: {

    todo1:'gerghtrhtehteh',
    todo2:'^&^(*^(*&)(',
    todo3:'HJK*^(*^KJi69698678698'

}


}


test