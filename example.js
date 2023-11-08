// // var globalExtra = 'Krzysiek coś tam'
// // var globalExtra =3
// // var globalExtra = 8
// // var globalExtra = ()=>{}
// // var globalExtra = []
// // var globalExtra = {}

// // // nie trzeba podawać wartości domyślnej
// // let myUserName

// // // trzeba podawać wartości domyślnej
// // const myNewName = ''
// // const mySecondName = myNewName.replace('', 'Krzysztof')

// // // Klasa zawiera słowo class nazwę i nawias klamrowy otwarcia i zamknięcia
// // class Main {

// //     // zawsze zawiera nawias okrągły i klamrowy
// //     // Metoda musi być zawsze zawarta w klasie
// //     logText() {
// //         // let myNameFunction = 'Jola'

// //         // let getName = () => {

// //         //     let myNameBlock = 'Marek'

// //         //     return myNameBlock
// //         // }
// //         myUserName = 'Krzysiek'

// //         console.log(myUserName + '\n' + 'Trener')
// //     }
// // }

// // // Referencja do klasy i wywołanie metody z klasy
// // // new Main().logText()

// // let text = 'Krzysiek prowadzi szkolenie'

// // console.log(text + '\n' + text.length)

// // const text2 = "Uczę się stringów w C++";

// // let editText = text2.replace('C++', 'JavaScript')

// // console.log(editText)

// const fs = require('fs');
// const jsonFile = fs.readFileSync(
// 	'./test-framework/cypress/fixtures/example.json',
// 	'utf8'
// );
// const data = JSON.parse(jsonFile);
// console.log(data);

// class Main {

// 	getName(myName = 'Krzysztof') {
// 		return myName;

// 	}
// }

// class NewMain {
// 	getNewName(myName = 'Krzysztof') {
// 		return myName;
// 	}

// 	logNames(newName = 'Krzysztof') {

// 		console.log(new Main().getName().slice(0, 2))

// 		let newEditedName = new Main().getName('marek').slice(0, 1).toUpperCase()
// 		console.log(newEditedName + new Main().getName('marek').slice(1))

// 		console.log(newName.slice(0, 2));

// 		let editedtName = newName.slice(0, 1).toLowerCase();
// 		console.log(editedtName + newName.slice(1));

// 		console.log(`${newName} Kołodziejczyk jest trenerem.`);
// 	}
// }

// new NewMain().logNames();

// // Napisz metodę JavaScript, aby sprawdzić dwie podane liczby i zwróć true,
// // jeśli jedna z liczb to 50 lub jeśli ich suma to 50

// let test50 = (x, y) => ((x == 50 || y == 50) || (x + y == 50))

// test50(30, 50)









// let obj = {
// 	Admin1: 'Krzysztof Kołodziejczyk',
// 	'Tester 1': 'Marek Buła',
// 	namesList: ['Krzysztof', 'Marek']
// };

let a = "Krzysiek prowadzi szkolenie"

let myfun = () => {

	console.log(a)
}