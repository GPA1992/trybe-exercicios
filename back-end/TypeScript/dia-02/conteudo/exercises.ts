type Numbers = {
    x: number;
    y: number;
}

const sum = (number: Numbers) => console.log(number.x+number.y);

const numb = {
    x: 10,
    y: 5,
}

sum(numb)

class Person {
    name: string;
    birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
    age: number;

    constructor(name: string, birthDate: Date, age: number) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
        this.name  = name;
        this.birthDate  = birthDate;
        this.age  = age;
    }

    speak(): void {
        console.log(`${this.name} está falando.`);
    }

    eat(): void {
        console.log(`${this.name} está comendo.`)
    }

    walk(): void {
        console.log(`${this.name} está andando.`)
    }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"), 27);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);

console.log(person1);
person1.speak()