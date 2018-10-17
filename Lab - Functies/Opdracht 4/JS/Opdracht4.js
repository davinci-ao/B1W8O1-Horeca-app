function tafel(gekozentafel){
	if (gekozentafel > 10) {
		alert('Bereuk van getal moet zijn 1 t/m 10.');
		var gekozentafel = prompt ('Hoeveel tafels wilt u zien?');		
		tafel(gekozentafel);
	}else if (gekozentafel <= 10){
		for (i=1; i<=gekozentafel; i++){
			document.write('1 x' + ' ' + i + ' ' + '=' + ' ' + (1 * i) + '<br/>');
			document.write('2 x' + ' ' + i + ' ' + '=' + ' ' + (2 * i) + '<br/>');
			document.write('3 x' + ' ' + i + ' ' + '=' + ' ' + (3 * i) + '<br/>');
			document.write('4 x' + ' ' + i + ' ' + '=' + ' ' + (4 * i) + '<br/>');
			document.write('5 x' + ' ' + i + ' ' + '=' + ' ' + (5 * i) + '<br/>');
			document.write('6 x' + ' ' + i + ' ' + '=' + ' ' + (6 * i) + '<br/>');
			document.write('7 x' + ' ' + i + ' ' + '=' + ' ' + (7 * i) + '<br/>');
			document.write('8 x' + ' ' + i + ' ' + '=' + ' ' + (8 * i) + '<br/>');
			document.write('9 x' + ' ' + i + ' ' + '=' + ' ' + (9 * i) + '<br/>');
			document.write('10 x' + ' ' + i + ' ' + '=' + ' ' + (10 * i) + '<br/><br/>');
		}
	}else{
		alert('U dient een getal in te voeren.');
		var gekozentafel = prompt ('Hoeveel tafels wilt u zien?');
		tafel(gekozentafel);
	} 
}
var gekozentafel = prompt ('Hoeveel tafels wilt u zien?');
tafel(gekozentafel);