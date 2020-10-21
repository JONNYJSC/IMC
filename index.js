// funcion de suma total
// const suma = (ns) => {
//   let acumulado = 0;
//   for (i = 0; i < ns.length; i++) {

//     acumulado += ns[i];
//   }

//   return acumulado
// }

// const numeros = [1, 2, 3, 4, 5];
// multiplicar * 2
// const multiplicados = numeros.map(x => x * 2)
// a pares
// const parejas = numeros.map(x => [x, x])

// const mascotas = [
//   { nombre: 'Puchini', edad: 12, tipo: 'perro' },
//   { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro' },
//   { nombre: 'Pulga', edad: 10, tipo: 'perro' },
//   { nombre: 'Pelusa', edad: 12, tipo: 'gato' },
// ]
// edad promedio
// const edades = mascotas.map(x => x.edad)
// const resultado = suma(edades)
// console.log(resultado / edades.length);

//const arr = { Num: 123, unString: 'Hola', unaCondicion: true };
//console.log(arr);

//const miObjet = [123, 'Hola', true];
//console.log(miObjet[0]);

// let x = 0;
// while (x < 5) {
//   console.log(x);
//   x++;
// }

// switch (3) {
//   case 1: {
//     console.log('Caso 1'); break;
//   }
//   case 2: {
//     console.log('Caso 2'); break;
//   }
//   case 3: {
//     console.log('Caso 3'); break;
//   }
//     default: console.log('Ninguno de los casos!')
// }
// const arr = [1, 'Hola', true]
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// function iterar(arg1) {
//   for (let i = 0; i < arg1.length; i++) {
//     console.log(arg1[i]);
//   }
// }

// const numb = [1, 2, 3, 4, 5]
// const nombres = ['Juan', 'Maria', 'Jonny', 'Karlita']
// iterar(numb)
// iterar(nombres)

// function suma(a, b) {
//   return a + b;
// }

// const r1 = suma(1, 2);
// const r2 = suma(4, 5);
// const r3 = suma(r1, r2);

// console.log('resultado:', r3);

//  callback
// function sumar(a, b, cb) {
//   const r = a + b
//   cb(r)
// }

// function callback(result) {
//   console.log('resultado:', result)
// }

// sumar(2, 3, callback)

// fat arrow function
// const arrowF = (a, b) => a + b
// const arrowF2 = (a, b) => {
//   return a + b
// }

// const r = arrowF(3, 3)
// console.log(r);

// function anonima

// function sumar(a, b, cb) {
//    const r = a + b
//    cb(r)
//  }

//  function callback(result) {
//    console.log('resultado:', result)
//  }

// sumar(3, 2, function (r) {
//    console.log('soy una funcion anonima:', r)
//  })
/*Fórmula del IMC usando el sistema métrico. El IMC es su peso en kilos divido por la altura (estatura) al cuadrado.

IMC = Peso (kg) / altura (m)2

Ejemplo:

Altura: 165 cm (1,65 m).

Peso: 68 kg

Cálculo: 68 ÷ 1,652 (2,7225) = 24,98*/

/*window.onload = () => {
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const cal = document.getElementById('cal');
    const imc = document.getElementById('imc');
    const lectura = document.getElementById('lectura');

    const kg = peso.value / 2.2;
    console.log(peso.value);

    cal.onclick = function () {
        if (peso != '' && altura != '') {

            altura = parseInt(altura / 100).value;
            var imcx = peso / (altura * altura);
            //imcx = (peso.value / (altura.value * altura.value));
            imc.innerHTML = imcx;
            console.log(imcx);

            if (imcx < 18.5) { lectura.innerHTML = 'Peso inferior al normal'; }
            else if (imcx >= 18.5 && imcx <= 24.9) { lectura.innerHTML = 'Peso normal'; }
            else if (imcx >= 25 && imcx <= 29.9) { lectura.innerHTML = 'Peso superior al normal'; }
            else if (imcx > 30) { lectura.innerHTML = 'Obesidad'; }
        } else {
            alert('Debes ingresar peso y altura');
        }
    }
}*/

function calcularIMC() {
    var nombre = document.getElementById('nombre').value;
    var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    var alturaEnMetros = alturaEnCentimetros / 100;
    var pesoEnKilos = parseInt(document.getElementById('peso').value);

    var imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    var clasificacion;

    if (imc < 18.5) {
        clasificacion = 'estás muy delgado';
    } else if (imc < 25) {
        clasificacion = 'estás saludable';
    } else {
        clasificacion = 'tienes sobrepeso';
    }
    /* Consejo:
    
    */
    var respuesta = 'Hola ' + nombre + ', tu IMC es ' + imc + ' y tu ' + clasificacion;
    alert(respuesta);
}