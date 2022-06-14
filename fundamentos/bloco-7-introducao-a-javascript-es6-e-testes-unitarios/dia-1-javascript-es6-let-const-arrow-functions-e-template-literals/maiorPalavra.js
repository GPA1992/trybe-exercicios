let string = "Antônio foi no banheiro e não sabemokkkkkkkkkkkks o que aconteceu";

console.log(string.split(' '));
let maior = "";

string.split(" ").forEach(word => {
  if (word.length > maior.length) {
    maior = word;
  }
});

console.log(maior);