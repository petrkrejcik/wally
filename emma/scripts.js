window.onload = () => {




};

let persons = [
 'Elena',
 'strejda Petr',
 'Marek',
 'děda',
 'babička Růženka',
 'Ivo',
 'babička Magda',
 'Máťa',
 'taťka',
 'mamka',
 'Ondra',
 'Emča',
 'Julie'
];


const hit = (text, person) => {
	let i = persons.indexOf(person);
	let msg = '';

	if (i === -1 && persons.length > 0) {

		msg = ['Ale to už jste označili...', "\n\n", 'Ještě chybí ', persons.join(', '), '.'].join('');
		alert(msg);
		return;
	}
	persons.splice(i, 1);

	if (persons.length === 0) {
		msg = 'Jupíííí, našli jste všechny!';
		alert(msg);
		return;
	}



	msg = [text, "\n\n", 'Ještě chybí ', persons.join(', '), '.'].join('');

	alert(msg);
};
