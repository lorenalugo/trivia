let count = 0;
let index = 0;
let arr = [];
const terror = ['eeuu', 'ninguna', 'linda'];
const ciencia = ['tony stark', 'siempre esta furioso', 'rojo'];
const btnStart = document.getElementById('start-btn');
//this event gets on fire when the user clicks on Let's play button
btnStart.addEventListener('click', function() {
	let nameUser = document.getElementById('name').value;
	if(nameUser !== '') {
	document.getElementById('first').classList.add('none');
	document.getElementById('second').classList.remove('none'); 
	document.getElementById('hello').innerHTML = `¡Hola ${nameUser}!`; 

	}
	else {
		document.getElementById('message').innerHTML = 'No has ingresado tu nombre';
	}
});
function reset() {
	count = 0;
  index = 0;
	const forms = document.getElementsByTagName('form');
	for (let k = 0; k < forms.length; k++) {
		forms[k].reset();
	} 
}
//this function hides the background-image and shows the questions
function hideImage() {
	document.getElementById('bg').classList.add('none');
	document.getElementById('third').classList.remove('none');
}

//this function checks user's selection and counts the correct answers
function checking(myform) {
  for (let i = 0; i < myform.length ;i++) {
    if(myform.elements[i].checked === true && myform.elements[i].value === arr[index]) {  
      count++;
    }
  }
  index++;
}

//listens click events for showing next questions and checking the answers
let terrorBtn = document.getElementById('terror-btn');
terrorBtn.addEventListener('click', function() {
	hideImage ();
	reset();
	arr = terror;
	document.getElementById('terror').classList.remove('none');
	});

let cienciaBtn = document.getElementById('ciencia-btn');
cienciaBtn.addEventListener('click', function() {
	hideImage();
	reset();
	arr = ciencia;
	document.getElementById('ciencia').classList.remove('none');
});

const nextBtn = document.getElementsByClassName('next-btn');

nextBtn[0].addEventListener('click', () => {checking(question1Form)});
nextBtn[1].addEventListener('click', () => {checking(question2Form)});
nextBtn[2].addEventListener('click', () => {
checking(question3Form);
index = 0;
 document.getElementById('third').classList.add('none');
 document.getElementById('fourth').classList.remove('none');
 document.getElementById('result').innerHTML = `Tienes ${count} respuestas correctas`;

});

nextBtn[3].addEventListener('click', () => {checking(tQuestion1Form)});
nextBtn[4].addEventListener('click', () => {checking(tQuestion2Form)});
nextBtn[5].addEventListener('click', () => {
checking(tQuestion3Form);
index = 0;
 document.getElementById('third').classList.add('none');
 document.getElementById('fourth').classList.remove('none');
 document.getElementById('result').innerHTML = `Tienes ${count} respuestas correctas`;

});

let back1 = document.getElementById('back-ciencia-btn');
let back2 = document.getElementById('back-terror-btn');

back1.addEventListener('click', function() {
	reset();
	hideImage();
	arr = ciencia;
	document.getElementById('ciencia').classList.remove('none');
	document.getElementById('terror').classList.add('none');
});
back2.addEventListener('click', function() {
	reset();
	hideImage ();
	arr = terror;
	document.getElementById('terror').classList.remove('none');
	document.getElementById('ciencia').classList.add('none');
	});

let init = document.getElementById('init');
init.addEventListener('click',() => {
  reset();
  document.getElementById('fourth').classList.add('none');
  document.getElementById('second').classList.add('none');
  document.getElementById('bg').classList.remove('none');
  document.getElementById('first').classList.remove('none');
});