const e = require('express');
const cadenaInversa = require('./cadenaInversa');
test ('Invierte la cadena "Hola" a "aloH"', () => {
    expect(cadenaInversa('Hola')).toBe('aloH');
});

test ('Invierte cadena vacia a cadena vacía', () => {
    expect(cadenaInversa('')).toBe('');
});

test ('Invierte cadena con espoacios "abc def" a "fed cba"', () => {
    expect(cadenaInversa('abc def')).toBe('fed cba');
});