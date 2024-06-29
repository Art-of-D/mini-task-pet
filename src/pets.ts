// class Pet {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   speak(): void {
//     console.log(`${this.name} can speak.`);
//   }
// }

// class Dog extends Pet {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
//   speak(): void {
//     console.log(`${this.name} can bark.`);
//   }

//   run(): void {
//     console.log(`${this.name} is running around of you.`);
//   }
// }

// class Fish extends Pet {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
//   speak(): void {
//     console.log(`${this.name} cann't talk, sorry.`);
//   }

//   dive(howDeep: number): void {
//     console.log(`${this.name} dived to ${howDeep} meters.`);
//   }
// }

// export { Pet, Dog, Fish };

type Pet = Dog | Fish;

class Dog {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHello(): string {
    return `${this.name} is barking.`;
  }
}

class Fish {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  dive(howDeep: number): string {
    return `${this.name} dived to ${howDeep} meters.`;
  }
}

export { Pet, Dog, Fish };
