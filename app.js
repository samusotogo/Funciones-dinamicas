//cidogo del cuadrado
 console.group("cuadrados");
function perimetroCuadrado(lado){
 return lado *4;
};

function areaCuadrado (lado){
  return lado * lado;
};

console.groupEnd ();

//codigo del triangulo

 console.group ("triangulos");

 function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 +base;
 };

 function areaTriangulo(base,altura){
   return (base * altura) / 2;
 }


console.groupEnd ();

//codigo circulos

console.group("circulos");
//Diametro
function diametroCirculo (radio){
  return radio*2 ;
}

//PI
const PI = Math.PI;

//circuferencia
function perimetroCirculo (radio){
  const diametro = diametroCirculo (radio);
  return diametro * PI;
}

//area 
function areaCirculo (radio){
  return (radio * radio) * PI ;
}

console.groupEnd();