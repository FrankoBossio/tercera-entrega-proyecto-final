
function Auto (marca, año, tipo, nombre, apellido, mail){
  this.marca = marca;
  this.año = año;
  this.tipo = tipo;
  this.nombre = nombre;
  this.apellido = apellido;
  this.mail = mail;
}

function getPrecioPorMarca(marca){

  if(marca === 'alfa romeo'){
    return 8000;
  }

  if(marca === 'audi'){
    return 8500;
  }
  
  if(marca === 'bentley'){
    return 6500;
  }

  if(marca === 'bmw'){
    return 8000;
  }

  if(marca === 'cadillac'){
    return 7500;
  }

  if(marca === 'chevrolet'){
    return 3500;
  }

  if(marca === 'citroen'){
    return 3000;
  }

  if(marca === 'ferrari'){
    return 10000;
  }

  if(marca === 'fiat'){
    return 3000;
  }

  if(marca === 'ford'){
    return 4000;
  }

  if(marca === 'honda'){
    return 4000;
  }

  if(marca === 'isuzu'){
    return 4500;
  }

  if(marca === 'iveco'){
    return 7000;
  }

  if(marca === 'jaguar'){
    return 9500;
  }

  if(marca === 'jeep'){
    return 6500;
  }

  if(marca === 'kia'){
    return 4500;
  }

  if(marca === 'lamborghini'){
    return 10000;
  }

  if(marca === 'land rover'){
    return 9500;
  }

  if(marca === 'lexus'){
    return 5000;
  }

  if(marca === 'maserati'){
    return 11000;
  }

  if(marca === 'mazda'){
    return 5500;
  }

  if(marca === 'mercedes-benz'){
    return 7000;
  }

  if(marca === 'mini'){
    return 5500;
  }

  if(marca === 'mitsubishi'){
    return 5000;
  }

  if(marca === 'morgan'){
    return 5500;
  }

  if(marca === 'nissan'){
    return 5000;
  }

  if(marca === 'peugeot'){
    return 4500;
  }

  if(marca === 'piaggio'){
    return 4500;
  }

  if(marca === 'porsche'){
    return 10000;
  }

  if(marca === 'renault'){
    return 3500;
  }

  if(marca === 'rolls-royce'){
    return 12000;
  }

  if(marca === 'seat'){
    return 3500;
  }

  if(marca === 'smart'){
    return 5500;
  }

  if(marca === 'subaru'){
    return 7500;
  }

  if(marca === 'tesla'){
    return 10000;
  }

  if(marca === 'toyota'){
    return 5000;
  }

  if(marca === 'volkswagen'){
    return 4500;
  }

  if(marca === 'volvo'){
    return 6500;
  }

}

function getPrecioPorAño(año){
  return parseInt(año) * 0.5;
}

function getPrecioPorTipo(tipo){
  return tipo === 'basico' ? 1000 : 2500;
}


function procesarDatosDelForm(){

const nombre = document.getElementById("nombre").value;

const apellido = document.getElementById("apellido").value;

const mail = document.getElementById("mail").value;

const marca = document.getElementById("marca").value;

const año = document.getElementById("año").value;

const tipo = document.getElementById("radioBasico").checked ? 'basico' : 'completo'; //define si es o no "tipo basico"

const auto = new Auto(marca, año, tipo, nombre, apellido, mail)   //me crea un JSON

const autoAGuardar = JSON.stringify(auto);  //me crea string de JSON como parametro


localStorage.setItem('auto1', autoAGuardar) //guarda en localStorange

const cotizacion = getPrecioPorAño(año) + getPrecioPorMarca(marca) + getPrecioPorTipo(tipo); //formula de cotizacion

document.getElementById('cotizacion').innerHTML = 'Tu cotizacion es de $ ' + cotizacion;

}

										 ///////////////////////////////BOTON COTIZAR///////////////////////////

$ ('#scriptBox').mouseover (function(){
	$('#scriptBox').css("color","black")
	$('#scriptBox').css("background","#577691")
	$('#scriptBox').css("font-family","verdana")
});

$('#scriptBox').mouseout (function(){
	$('#scriptBox').css("color","black")
	$('#scriptBox').css("background","rgba(0,0,0,0.3)")
	$('#scriptBox').css("font-family","arial")
});

$('#scriptBox').one("click", function(){
	alert("Aguarde mientras valoramos su seguro")
});






										 ///////////////////////////////MENU SCROLL///////////////////////////
$(document).ready(function(){ 
	const altura =$('.menu').offset().top;

	$(window).on('scroll', function(){
		if ($(window).scrollTop() > altura){
			$('.menu').addClass('menu-fixed');
		}
		else{
			$('.menu').removeClass('menu-fixed');
		}

	});
});

										 ///////////////////////////////FORMULARIO///////////////////////////

var inputs = document.getElementByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++){
	inputs[i].addEventListener('keyup' , function(){
		if(this.value.length>=1) {
			this.nextElementSibling.classList.addClass('fijar')
		}
		else{
			nextElementSibling.classList.removeClass('fijar')
		};
	});
};





										 ///////////////////////////////INDICADOR DE CARGA///////////////////////////
/*										 
window.onload = function(){
	var contenedor = document.getElementById('contenedor-carga');

	contenedor.style.visibility = 'hidden';
	contenedor.style.opacity ='0';
}

*/

