const calc = require('./calculadora');

describe('Testes da calculadora', () => {

    test('somar 2 e 2 deve retornar 4', () => {
        const minhaSoma = calc.soma(2, 2)
        expect(minhaSoma).toBe(4)
    })

    test('multiplicar 3 e 3 deve retornar 9', () => {
        const testeMultiplicacao = calc.multiplicar(3, 3)
        expect(testeMultiplicacao).toBe(9)
    })

    test('multiplicar 3 e 3 deve retornar 9 ou maior', () => {
        const testeMultiplicacao = calc.multiplicar(3, 3)
        expect(testeMultiplicacao).toBeGreaterThanOrEqual(9)
    })
})