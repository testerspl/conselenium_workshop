class Animal {
	constructor(animalName = 'Animal') {
		this.animalName = animalName;
	}

	speak(message = 'makes a noise.') {
		console.log(this.animalName + message);
	}
}

class Dog extends Animal {
	constructor(dogName) {
		super(dogName);
	}

	barking() {
		this.speak('barks');
	}
}

let dog = new Dog('Rufus ');

dog.barking();
