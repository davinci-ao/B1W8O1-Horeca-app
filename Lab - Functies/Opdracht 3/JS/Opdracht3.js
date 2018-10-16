function nameperson(){
	var name = prompt ('Wat is uw naam?');
	if (name != 'stop') {
		document.write('Hallo' + ' ' +name);
		document.write(' ');
		var age = prompt ('Hoe oud bent u?');
		document.write('u bent' +' '+ age +' '+ 'jaar oud.');
		document.write('<br/>');
		nameperson();
	}
}

nameperson();