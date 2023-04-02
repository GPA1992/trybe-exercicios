import Clube from './src/Clube';
import QuadraFutebol from './src/QuadraFutebol'
import QuadraTenis from './src/QuadraTenis'

const trybeClube = new Clube();
const quadraFutebol = new QuadraFutebol();
const quadraTenis = new QuadraTenis();

trybeClube.adicionarQuadra(quadraFutebol);
const dataReserva = new Date('2022-12-28');

trybeClube.adicionarQuadra(quadraTenis);
const dataReserva2 = new Date('2022-12-29');

const reservarQuadraFutebol = trybeClube
    .buscarQuadra<QuadraFutebol>(0) // buscando a quadra de futebol a posição 0, já que ela foi a primeira a ser adicionada no array de quadras do clube
    .reservar(dataReserva); // o método reservar é da Classe QuadraFutebol, e passamos a data que queremos reservar
    console.log(reservarQuadraFutebol);

const reservarQuadraTenis= trybeClube
    .buscarQuadra<QuadraTenis>(1) // buscando a quadra de futebol a posição 0, já que ela foi a primeira a ser adicionada no array de quadras do clube
    .reservar(dataReserva2); // o método reservar é da Classe QuadraFutebol, e passamos a data que queremos reservar
    console.log(reservarQuadraTenis);