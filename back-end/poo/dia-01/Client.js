"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(name) {
        this._name = String();
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }
        this._name = value;
    }
}
exports.default = Client;
