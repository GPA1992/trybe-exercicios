"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Student extends Person_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._enrollment = String();
        this._examsGrades = [];
        this._worksGrades = [];
        this.enrollment = this.generateEnrollment();
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        if (value.length < 16) {
            throw new Error("Matrícula precisa ter no minimo 16 caracteres");
        }
        this._enrollment = value;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    set examsGrades(value) {
        if (value.length !== 4) {
            throw new Error("Deve ter 4 notas de prova");
        }
        this._examsGrades = value;
    }
    get worksGrades() {
        return this._worksGrades;
    }
    set worksGrades(value) {
        if (value.length !== 2) {
            throw new Error("Deve ter 2 notas de trabalho");
        }
        this._worksGrades = value;
    }
    generateEnrollment() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `STU${randomStr}`;
    }
    sumGrades() {
        return [...this._examsGrades, ...this._worksGrades].reduce((previous, act) => {
            act += previous;
            return act;
        }, 0);
    }
    sumAverage() {
        const sumGrades = this.sumGrades();
        const divider = this.examsGrades.length + this.worksGrades.length;
        return sumGrades / divider;
    }
}
exports.default = Student;
const maria = new Student('Maria', new Date('2005/03/17'));
const gabriel = new Student('Gabriel', new Date('2005/03/17'));
maria.examsGrades = [25, 20, 25, 23];
gabriel.examsGrades = [25, 20, 25, 23];
maria.worksGrades = [50, 48];
gabriel.worksGrades = [50, 47];
console.log(maria);
console.log(gabriel);
