class test {
  constructor(
    public name: string,
    private email: string,
    protected age: number
  ) {
    this.name = name;
    this.email = email;
  }

  func1() {
    console.log(this.name);
  }

  get func2() {
    return this.email;
  }

  set func2(email: string) {
    if (email.includes('.com')) {
      this.email = email;
    } else {
      console.error('Invalid email address');
    }
  }
}

const t = new test('John Doe', 'john@gmail.com', 30);

console.log(t.name);
console.log(t.func2);
t.func2 = 'iftikhar@gmail.com';
console.log(t.func2);

class parentTest extends test {
  public isAdmin = true;

  public maxAge() {
    this.age = 34;
  }
}

const t2 = new parentTest('zian', 'zia2@gmal.com', 45);

t2.maxAge();
console.log(t2.age);
console.log(t.email);
console.log(t2.isAdmin);

// Implements

type TColor = {
  color: string;
  weight: number;
};

class Bike implements TColor {
  constructor(public color: string, public weight: number) {}
}

// Abstract Classes
// Abstract class
abstract class Animal {
  // Abstract method (no implementation)
  abstract makeSound(): void;

  // Non-abstract method with implementation
  move(distanceInMeters: number): void {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

// Class extending abstract class
class Dog extends Animal {
  // Implementing the abstract method
  makeSound(): void {
    console.log('Woof! Woof!');
  }
}

// Class extending abstract class
class Cat extends Animal {
  // Implementing the abstract method
  makeSound(): void {
    console.log('Meow!');
  }
}

// Creating instances
let dog = new Dog();
dog.makeSound(); // Output: Woof! Woof!
dog.move(10); // Output: Animal moved 10m.

let cat = new Cat();
cat.makeSound(); // Output: Meow!
cat.move(5); // Output: Animal moved 5m.
