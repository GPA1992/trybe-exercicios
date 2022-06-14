const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const newTurn = (turn) => {
    const novoTurno = lesson2.turno = turn;
    return lesson2
};
console.log(newTurn('noite'));
//
const objectKeys = (obj) => {
   return Object.keys(obj)
}
console.log(objectKeys(lesson3));
//
const objectLength = (obj) => {
    return Object.keys(obj).length
 }
console.log(objectLength(lesson3));
//
const objectValues = (obj) => {
    return Object.values(obj)
 }
 console.log(objectValues(lesson3));
 //
 const allLessons = {};
 Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});
 console.log(allLessons);
 //
 const allStudents = (allLessons) => {
    const studentsLesson1 = lesson1.numeroEstudantes;
    const studentsLesson2 = lesson2.numeroEstudantes;
    const studentsLesson3 = lesson3.numeroEstudantes;
    const allStudent = studentsLesson1 + studentsLesson2 + studentsLesson3;
    return allStudent
 }
console.log(allStudents(allLessons));
//
const getValueByNumber = (obj, number) => {
    console.log(Object.values(obj)[number]);
}
getValueByNumber(lesson1, 0);
//
const verifyPair = (obj, key, value) => {
    const keyValue = Object.entries(obj);
    for (index in keyValue) {
    if (keyValue[index] === key, value) {
        return true
    } else {
        false
    }
}
};
console.log(verifyPair(lesson1, 'numeroEstudantes', 20));