let count = 0;
let arr = [];
const terror = ['eeuu', 'ninguna', 'linda'];
const ciencia = ['tony stark', 'siempre esta furioso', 'rojo'];
const btnStart = document.getElementById('start-btn');
//this event gets on fire when the user clicks on Let's play button
btnStart.addEventListener('click', function() {
	let nameUser = document.getElementById('name').value;
	if(nameUser !== '') {
	document.getElementById('first').style.display = 'none';
	document.getElementById('second').style.display = 'block'; 
	document.getElementById('hello').innerHTML = `¡Hola ${nameUser}!`; 

	}
	else {
		document.getElementById('message').innerHTML = 'No has ingresado tu nombre';
	}
});
function reset() {
	count = 0;
	const forms = document.getElementsByTagName('form');
	for (let k = 0; k < forms.length; k++) {
		forms[k].reset();
	} 
}
//this function hides the background-image and shows the questions
function hideImage() {
	document.getElementById('bg').style.display = 'none';
	document.getElementById('fourth').style.display = 'none';
	document.getElementById('third').style.display = 'block';
}
//this function checks user's selection and counts the correct answers
function checking() {
let x = document.getElementsByTagName('form');
  for (let i = 0; i < x.length ;i++) {
    if(x.elements[i].checked === true && x.elements[i].value === arr[0]) {	
    	console.log('Respuesta Correcta');
    	count++;
    	console.log(`Tienes ${count} respuestas correctas`);
    	document.getElementById('result').innerHTML(`Tienes ${count} respuestas correctas`);
 	}
    else {
    	console.log('Respuesta Incorrecta');
    }
  }	
}
//listens click events for showing next questions and checking the answers
let terrorBtn = document.getElementById('terror-btn');
terrorBtn.addEventListener('click', function() {
	hideImage ();
	reset();
	arr = terror;
	document.getElementById('terror').style.display = 'block';
	});

let cienciaBtn = document.getElementById('ciencia-btn');
cienciaBtn.addEventListener('click', function() {
	hideImage();
	reset();
	arr = ciencia;
	document.getElementById('ciencia').style.display = 'block';
});

const nextBtn = document.getElementsByClassName('next-btn');

nextBtn[0].addEventListener('click', function() {
let x = document.getElementById('question1-form');
  for (let i = 0; i < x.length ;i++) {
    if(x.elements[i].checked === true && x.elements[i].value === arr[0]) {	
    	count++;
   	}
  }	
});
nextBtn[1].addEventListener('click', function() {
let x = document.getElementById('question2-form');
  for (let i = 0; i < x.length ;i++) {
    if(x.elements[i].checked === true && x.elements[i].value === arr[1]) {	
    	count++;
   	}
  }	
});
nextBtn[2].addEventListener('click', function() {
let x = document.getElementById('question3-form');
  for (let i = 0; i < x.length ;i++) {
    if(x.elements[i].checked === true && x.elements[i].value === arr[2]) {	
    	count++;
   	}
  }
 document.getElementById('third').style.display = 'none';
 document.getElementById('fourth').style.display = 'block';
 document.getElementById('result').innerHTML = `Tienes ${count} respuestas correctas`;

});

nextBtn[3].addEventListener('click', function() {
let x = document.getElementById('tQuestion1-form');
  for (let i = 0; i < x.length ;i++) {
    if(x.elements[i].checked === true && x.elements[i].value === arr[0]) {	
    	count++;
   	}
  }	
});
nextBtn[4].addEventListener('click', function() {
let x = document.getElementById('tQuestion2-form');
  for (let i = 0; i < x.length ;i++) {
    if(x.elements[i].checked === true && x.elements[i].value === arr[1]) {	
    	count++;
   	}
  }	
});
nextBtn[5].addEventListener('click', function() {
let x = document.getElementById('tQuestion3-form');
  for (let i = 0; i < x.length ;i++) {
    if(x.elements[i].checked === true && x.elements[i].value === arr[2]) {	
    	count++;
   	}
  }
 document.getElementById('third').style.display = 'none';
 document.getElementById('fourth').style.display = 'block';
 document.getElementById('result').innerHTML = `Tienes ${count} respuestas correctas`;

});
let back1 = document.getElementById('back-ciencia-btn');
let back2 = document.getElementById('back-terror-btn');

back1.addEventListener('click', function() {
	reset();
	hideImage();
	arr = ciencia;
	document.getElementById('ciencia').style.display = 'block';
	document.getElementById('terror').style.display = 'none';
});
back2.addEventListener('click', function() {
	reset();
	hideImage ();
	arr = terror;
	document.getElementById('terror').style.display = 'block';
	document.getElementById('ciencia').style.display = 'none';
	});

