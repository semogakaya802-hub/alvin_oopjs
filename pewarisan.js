class Animal {
    
    bersuara() {
        console.log("Hewan bersuara");
    }
}

class Dog extends Animal {
    barking() {
        console.log("Anjing menggonggong");
    }
}

class Cat extends Animal {
    meowing() {
        console.log("Kucing mengeong");
    }
}

const dog1 = new Dog();
const cat1 = new Cat();
dog1.barking(); // Output: Anjing menggonggong
cat1.meowing(); // Output: Kucing mengeong