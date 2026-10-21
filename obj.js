// const athlete {
//     name: "Willhelm",
//     class: "Winter Olympic Athletes",
//     age: 26
// };

// console.log(athlete.name);
// console.log(athlete.class);
// console.log(athlete.age);

// const athlete = {
//     name: "Willhelm",
//     class: "Winter Olympic Athletes",

//     introduction: function() {
//         console.log("Hello, my name " + this.name);
//         console.log("my class is " + this.class);
//     }
// };

// athlete.introduction();

const book = {
    title:"The ancient falmire",
    author:"Camille",
    release:"2003",

    read: function(){
        console.log("this book is read at library" + this.title);
    }

};

const car = {
    name:"Toyota",
    model:"Corolla",    
    year:2020,
    speed: 90,

    start: function(){
        console.log("The " + this.year + " " + this.name + " " + this.model + " is starting." + " It can reach a speed of " + this.speed + " mph.");
    }
};

console.log(car.name);

car.start();

console.log(book.title);

book.read();