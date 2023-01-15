"use strict";
/* import Client from './Client';
import Order from './Order';
import OrderItem from './OrderItem';

const client = new Client('João');

const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order); */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const maria = new Person_1.default('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person_1.default('Luiza Andrade', new Date('2005/10/02'));
console.log(maria);
console.log(luiza);
