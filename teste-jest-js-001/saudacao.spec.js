const saudar = require('./saudacao');

describe("Teste para arquivo saudacao", () => {
    test("Deve retornar Olá, Maria", () => {
        const olaMaria = saudar.saudacao("Maria");
        expect(olaMaria).toBe("Olá, Maria");
        expect(olaMaria).toContain(",");
    });

    test("Teste booleano", () => {
        expect(true).toBeTruthy();
        expect(false).toBeFalsy();
        expect(false).not.toBeTruthy();
    });

    test("Teste de array", () => {
        expect([1, 2, 3, 4, 5]).toHaveLength(5);
    })
})