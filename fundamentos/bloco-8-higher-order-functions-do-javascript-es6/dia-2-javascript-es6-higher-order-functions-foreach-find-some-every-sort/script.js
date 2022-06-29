const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };

  emailListInData.forEach(showEmailList);
// find

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (numbers) => numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5(numbers))
//
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (arr) => arr.find((nome) => nome.length === 5);

console.log(findNameWithFiveLetters(names));
//
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  const findMusic = (id) => musicas.find((musica) => musica.id === id);
  
  
  console.log(findMusic('31031685'))
  //
  const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));