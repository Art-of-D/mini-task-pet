import { Pet, Dog, Fish } from "./pets";

const pet: Pet = new Dog("Dog", 5);
const fish: Pet = new Fish("Fish", 1);

function talkToPet(pet: Pet): string | undefined {
  if (pet instanceof Dog) {
    return pet.sayHello();
  } else if (pet instanceof Fish) {
    return "Fish can't talk, sorry.";
  }
}

console.log(talkToPet(pet));
console.log(talkToPet(fish));
//console.log(talkToPet({ name: "Cat", age: 3 }));
