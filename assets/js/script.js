/*funcion de multiplicacion*/ 
function Multiplicar(j){

	document.write("<h2>Tabla de multiplicar del "+ j +"</h2>");
	document.write("<ul>");

	for(i = 1;i<=20;i++){
		document.write("<li>");
		document.write(j + "x " + i + "= " + j * i);
		document.write("</li>");
	}

	document.write("</ul>");
}

    /*funcion de factorizacion*/
//    function factorialize(j) {
//        if (j === 0 || j === 1)
//        return 1;
//        for (let i = j - 1; i >= 1; i--) {
//        j *= i;
//        }
//        return j;
//    }


/*comienza la edicion de codigo*/
var moo = prompt('Hora de estudiar las tablas de multiplicar. Indicame un numero mayor a 0');
if (moo >= 0) {
    Multiplicar(moo);
}else if (moo <= -1){
    prompt('Hey! dije que tenia que ser mayor a 0. Intentalo nuevamente');
}else if (moo ==""){    
    prompt('Dejar el espacio en blanco no lo entiendo. Intentalo nuevamente');
}

/*pruebas de tabla de factorizacion*/
document.write("<h3>Tabla de Factorizacion de "+ moo +"</h3>");
document.write("<ul>");

let factorial = moo => {
    if (moo < 0 || moo > 100) return;
    if (moo % 1 !== 0) {
        moo = parseInt(moo);
    }
    if (moo === 0) return 1;
    if (moo === 1) return 1;
    return moo * factorial(moo - 1);
}

document.write(`Factorial de ${moo} es ${factorial(moo)}`);