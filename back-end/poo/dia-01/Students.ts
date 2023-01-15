class Student {
    private _enrollment: string;
    private _name: string;
    private _examsGrades: number[] = Array();
    private _worksGrades: number[] = Array();
    
    constructor(enrollment: string, name: string, exames: number[], works:number[] ) {
        this._enrollment = enrollment;
        this._name = name;
        this.examsGrades = exames;
        this.worksGrades = works;
    }

    public get enrollment(): string {
        return this._enrollment;
    }
    public set enrollment(value: string) {
        this._enrollment = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get examsGrades(): number[] {
        return this._examsGrades;
    }
    public set examsGrades(value: number[]) {
        if (value.length !== 4) {
            throw new Error('A pessoa precisa ter 4 notas de prova')
        }
        this._examsGrades = value;
    }

    public get worksGrades(): number[] {
        return this._worksGrades;
    }
    public set worksGrades(value: number[]) {
        if (value.length !== 2) {
            throw new Error('A pessoa precisa ter 2 notas de trabalho')
        }
        this._worksGrades = value;
    }

    sumGrades(): number {
        return [...this.examsGrades, ...this.worksGrades].reduce((previous, act) => {
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

const student1 = new Student('30', 'Gabriel', [6, 4, 8, 5], [4,5])

console.log(student1);
console.log(student1.sumGrades());
console.log('media', student1.sumAverage());


const student2 = new Student('23', 'Maria', [6, 4, 8, 10], [4,5])

console.log(student2);
console.log(student2.sumGrades());
console.log('media', student2.sumAverage());
