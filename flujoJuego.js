//para generar un número aleatorio entre 2 números en este caso, entre 0 y 4 que son nuestras opciones del array
function numAleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}

function obtenerValor(formulario)
{
	var opcionUsuario = formulario.opcion.value;
	


//var opcionUsuario = prompt("Elije una opción: Piedra(0)\nPapel(1)\nTijera(2)\nLagarto(3)\nSpock(4)\n",0);
var opcionMaquina = numAleatorio(0,4);

var piedra = 0;
var papel = 1;
var tijeras = 2;
var lagarto = 3;
var spock = 4;
var opciones = ["piedra","papel","tijeras","lagarto","spock"]; 

alert("Elejiste: "+opciones[opcionUsuario]+" La maquina: "+opciones[opcionMaquina]);

if(opcionUsuario==opcionMaquina)
{
	alert("Empate!");
}
else
{
	if(opcionUsuario==piedra)
	{
		if(opcionMaquina==tijeras || opcionMaquina==lagarto)
		{
			alert("Ganaste!")
		}
		else
		{
			alert("Perdiste!")
		}		
	}
	else if(opcionUsuario==papel)
	{
		if(opcionMaquina==piedra || opcionMaquina==spock)
		{
			alert("Ganaste!")
		}
		else
		{
			alert("Perdiste!")
		}
	}
	else if(opcionUsuario==tijeras)
	{
		if(opcionMaquina==papel || opcionMaquina==lagarto)
		{
			alert("Ganaste!")
		}
		else
		{
			alert("Perdiste!")
		}		
	}
	else if(opcionUsuario==lagarto)
	{
		if(opcionMaquina==spock || opcionMaquina==papel)
		{
			alert("Ganaste")
		}
		else
		{
			alert("Perdiste!")
		}
	}
	else if(opcionUsuario==spock)
	{
		if(opcionMaquina==tijeras || opcionMaquina==piedra)
		{
			alert("Ganaste!")
		}
		else
		{
			alert("Perdiste!")
		}
	}
	else
	{
		alert("No escogiste nada!")
	}
}
}
