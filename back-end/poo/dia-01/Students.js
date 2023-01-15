"use strict";
class Student {
    constructor(enrollment, name, exames, works) {
        this._enrollment = enrollment;
        this._name = name;
        this._examsGrades = exames;
        this._worksGrades = works;
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        this._enrollment = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    set examsGrades(value) {
        this._examsGrades = value;
    }
    get worksGrades() {
        return this._worksGrades;
    }
    set worksGrades(value) {
        this._worksGrades = value;
    }
}
const student1 = new Student('27', 'Gabriel', [6, 4, 8], [4, 5, 6]);
console.log(student1);
