
//constructor function BEFORE ES6 WE DONT USE THIS ANYMORE...

function Mug(material, price, designName) {
    this.material = material;
    this.price = price;
    this.designName = designName;
}

const mugJan = new Mug('glass', 36.08, 'design1');  
const mugFeb = new Mug('wood', 37.84, 'design2');  
const mugMar = new Mug('plastic', 37.84, 'design3');  

console.log(mugJan) // Mug { material: 'glass', price: 36.08, designName: 'design1' }
console.log(mugFeb) // Mug { material: 'wood', price: 37.84, designName: 'design2' }
console.log(mugMar) // Mug { material: 'plastic', price: 37.84, designName: 'design3' }


// After ES6 - classes
class Student {
    constructor(fullname, age, program) {
        this.fullname = fullname;
        this.age = age;
        this.program = program;
    }
}

const student1 = new Student('John Doe', 25, 'Sdet') 

console.log(student1) // Student { fullname: 'John Doe', age: 25, program: 'Sdet' }
console.log(student1.age) // 25