var totalfris = 0
var totalbier = 0
var totalwijn = 0
var totalsnack8 = 0
var totalsnack16 = 0

const FRIS = 150;
const BIER = 200; 
const WIJN = 300;
const SNACK8 = 500;
const SNACK16 = 1000;

function Order(){
	var bestelling = prompt('Welke bestelling wilt u toevoegen?');
	if (bestelling == 'fris') {
		var fris = prompt ('Hoeveel fris wilt u toevoegen?');
		alert ('U heeft' +' '+ fris + ' ' + 'fris toegevoegd');
		totalfris = Number(totalfris) + Number(fris)
		Order();
	}else if (bestelling == 'bier'){
		var bier = prompt ('Hoeveel bier wilt u toevoegen?');
		alert ('U heeft' +' '+ bier + ' ' + 'bier toegevoegd');
		totalbier = Number(totalbier) + Number(bier)
		Order();
	}else if (bestelling == 'wijn'){
		var wijn = prompt ('Hoeveel wijn wilt u toevoegen?');
		alert ('U heeft' +' '+ wijn + ' ' + 'wijn toegevoegd');
		totalwijn = Number(totalwijn) + Number(wijn)
		Order();
	}else if (bestelling == 'snack'){
		var snack = prompt ('Hoeveel bitterballen wilt u toevoegen (8 of 16)?');
		if (snack == 8) {
			var snack8 = prompt ('Hoeveel bitterbalschalen van 8 wilt u bestellen?');
			alert ('U heeft' +' '+ snack8 + ' ' + 'bitterbalschalen van 8 stuks toegevoegd');		
			totalsnack8 = Number(totalsnack8) + Number(snack8)
			Order();
		}else if(snack == 16){
			var snack16 = prompt ('Hoeveel bitterbalschalen van 16 wilt u bestellen?');
			alert ('U heeft' +' '+ snack16 + ' ' + 'bitterbalschalen van 16 stuks toegevoegd');		
			totalsnack16 = Number(totalsnack16) + Number(snack16)
			Order();			
		}else{
			alert('Wij hebben alleen bitterbalschalen van 8 en 16 stuks.');
			Order();
		}

	}else if (bestelling == 'stop'){
		var pricesfris = FRIS * totalfris / 100;
		var pricesbier = BIER * totalbier / 100;
		var priceswijn = WIJN * totalwijn / 100;
		var pricessnack8 = SNACK8 * totalsnack8 / 100;
		var pricessnack16 = SNACK16 * totalsnack16 / 100;
		document.body.innerHTML = '';
		document.write('Bedankt voor het bestellen bij snackbar van de Weijde uw bestelling staat hier onder op de bon. Klopt er iets niet neem dan contact met ons op! <br/><br/.');
		document.write('U heeft' + ' ' + totalfris + ' ' + 'fris besteld.' + '<br />');
		document.write(totalfris + ' ' + 'x €1,50'+ ' ' + ' = ' + '€' + pricesfris + '<br/><br/>');
		document.write('U heeft' + ' ' + totalbier + ' ' + 'bier besteld.' + '<br />');
		document.write(totalbier + ' ' + 'x €2,00'+ ' ' + ' = ' + '€' + pricesbier + '<br/><br/>');		
		document.write('U heeft' + ' ' + totalwijn + ' ' + 'wijn besteld.' + '<br />');
		document.write(totalwijn + ' ' + 'x €3,00'+ ' ' + ' = ' + '€' + priceswijn + '<br/><br/>');		
		document.write('U heeft' + ' ' + totalsnack8 + ' ' + 'bitterbalschalen van 8 stuks besteld.' + '<br />');
		document.write(totalsnack8 + ' ' + 'x €5,00'+ ' ' + ' = ' + '€' + pricessnack8 + '<br/><br/>');		
		document.write('U heeft' + ' ' + totalsnack16 + ' ' + 'bitterbalschalen van 16 stuks besteld.' + '<br />');
		document.write(totalsnack16 + ' ' + 'x €10,00'+ ' ' + ' = ' + '€' + pricessnack16 + '<br/><br/>');
		document.write('totaal prijs = €' + ' ' + (pricesfris + pricesbier + priceswijn + pricessnack8 + pricessnack16)+ '<br/><br/>');	
		document.write('<a href="#" onclick="Order();">Vergeten?</a>');	
	}else{
		alert('Dit product hebben wij helaas niet wij hebben wel: fris, bier, wijn en bitterballen.');
		Order();	
	}
}

Order();