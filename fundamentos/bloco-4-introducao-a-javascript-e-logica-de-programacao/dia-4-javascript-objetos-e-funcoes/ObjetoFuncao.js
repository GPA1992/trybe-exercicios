let player = {
    name:'Marta',
    lastName: 'Silva',
    age: '34',
    bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018],
    medals:{
        golden:2,
        silver:3,
    }
    
}
console.log('A Jogadora ' + player.name + ' '+ player.lastName + ' tem ' + player.age + ' anos de idade')
console.log('A Jogadora ' + player.name + ' '+ player.lastName +' foi eleita a melhor do mundo por 6 vezes' )
console.log('A jogadora possui '+ player.medals.golden+' medalahas de ouro e ' + player.medals.silver + ' medalhas de prata');