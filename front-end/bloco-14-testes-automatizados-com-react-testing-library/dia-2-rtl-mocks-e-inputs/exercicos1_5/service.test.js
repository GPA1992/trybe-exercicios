const service = require('./service');


describe("Testes da função que retorna um número aleatorio", () => {
    test('Teste que verifica se a função retorna 10, foi chamada e quantas vezes foi chamada', () => {
        service.retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
        
        expect(service.retornaNumeroAleatorio()).toBe(10);
        expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);        
    })
    test('Teste se a função foi chamada e tem uma nova implementação de divisão e verifique se a aplicação da nova implementação acontece apenas uma vez', () => {
        service.retornaNumeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);

        expect(service.retornaNumeroAleatorio(10, 2)).toBe(5);
        expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(10, 2);
    })
    

});