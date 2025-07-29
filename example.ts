/**
 * Used only for example screenshot this theme color schemes
 */

interface User {
	id: number;
	name: string;
	email?: string; // Optional property
}

const newUser: User = {
	id: 1,
	name: 'Alice',
};

class Greeter {
	constructor(message: string) {
		this.greeting = message; // error
	}
}

function printId(id: number | string): void {
	if (typeof id === 'string') {
		console.log(id.toUpperCase()); // 'id' is narrowed to 'string' here
	} else {
		console.log(id); // 'id' is narrowed to 'number' here
	}
}
