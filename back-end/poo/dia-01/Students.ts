import Person from './Person'

export default class Student extends Person {
   private _enrollment = String();
    
   private _examsGrades: number[] = [];
   
   private _worksGrades: number[] = [];
   
   constructor (name: string, birthDate: Date) {
    super(name, birthDate)
    this.enrollment = this.generateEnrollment();

   }

    public get enrollment() {
        return this._enrollment;
    }
    public set enrollment(value) {
        if(value.length < 16) {
            throw new Error("Matrícula precisa ter no minimo 16 caracteres")
        }
        this._enrollment = value;
    }

    public get examsGrades(): number[] {
        return this._examsGrades;
    }

    public set examsGrades(value: number[]) {
        if(value.length !== 4) {
            throw new Error("Deve ter 4 notas de prova")
        }
        this._examsGrades = value;
    }

    public get worksGrades(): number[] {
        return this._worksGrades;
    }
    public set worksGrades(value: number[]) {
        if(value.length !== 2) {
            throw new Error("Deve ter 2 notas de trabalho")
        }
        this._worksGrades = value;
    }

    generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `STU${randomStr}`
    }

    sumGrades(): number {
        return [...this._examsGrades, ...this._worksGrades].reduce((previous, act) => {
            act += previous; 
            return act;
        }, 0)
    }

    sumAverage(): number {
        const sumGrades = this.sumGrades();
        const divider = this.examsGrades.length + this.worksGrades.length;
        return sumGrades / divider
    }

}

const maria = new Student('Maria', new Date('2005/03/17'))
const gabriel = new Student('Gabriel', new Date('2005/03/17'))

maria.examsGrades = [25, 20, 25, 23]
gabriel.examsGrades = [25, 20, 25, 23]
maria.worksGrades = [50, 48]
gabriel.worksGrades = [50, 47]

console.log(maria);
console.log(gabriel);

