test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar} = require('./app.js');

    // Uso la función como debe ser usada
    const dollar = fromEuroToDollar(3.5)
    const expect = 3.5 * 1.07
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
   

    // Hago mi comparación (la prueba)
    expect(dollar).toBe(expect); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One dollar should be 156,5 yen", function() {
    const {fromDollarToYen} = require('./app.js');
    
})


