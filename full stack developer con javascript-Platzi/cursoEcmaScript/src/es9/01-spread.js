const user = {
    nombre: "Andres",
    age: 23,
    country: 'MX'
};
const {nombre, ...values} = user;
console.log(nombre);
console.log(values);