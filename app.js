console.log('Up and running!');

$(document).ready(function() {


// Jackie Chan //
	$('#column5Card1').on("click", function() {	
			$('#row1Card5').css({'display' : 'block'});
			$('#row1Card5').fadeIn("fast");
	
			if ($('#row3Card2').is(':visible') && $('#row1Card5').is(':visible')) {
					$('#row1Card5').fadeOut(1500);
					$('#column5Card1').fadeOut(100);
					$('#row3Card2').fadeOut(1500);
					$('#column2Card3').fadeOut(100);
			}															
	});

	$('#column2Card3').on("click", function() {
  		$('#row3Card2').css({'display' : 'block'});
			$('#row3Card2').fadeIn("fast");


			if ($('#row3Card2').is(':visible') && $('#row1Card5').is(':visible')) {
					$('#row3Card2').fadeOut(1500);
					$('#column2Card3').fadeOut(100);
					$('#row1Card5').fadeOut(1500);
					$('#column5Card1').fadeOut(100);			
			}	
	});


// Jet Li //
	$('#column4Card1').on("click", function() {	
			$('#row1Card4').css({'display' : 'block'});
			$('#row1Card4').fadeIn("fast");
	
			if ($('#row1Card6').is(':visible') && $('#row1Card4').is(':visible')) {
					$('#row1Card4').fadeOut(1500);
					$('#column4Card1').fadeOut(100);
					$('#row1Card6').fadeOut(1500);
					$('#column6Card1').fadeOut(100);
			}															
	});

	$('#column6Card1').on("click", function() {
  		$('#row1Card6').css({'display' : 'block'});
			$('#row1Card6').fadeIn("fast");


			if ($('#row1Card6').is(':visible') && $('#row1Card4').is(':visible')) {
					$('#row1Card6').fadeOut(1500);
					$('#column6Card1').fadeOut(100);
					$('#row1Card4').fadeOut(1500);
					$('#column4Card1').fadeOut(100);			
			}	
	});

// Daniel Wu//
	$('#column1Card1').on("click", function() {	
			$('#row1Card1').css({'display' : 'block'});
			$('#row1Card1').fadeIn("fast");
	
			if ($('#row4Card1').is(':visible') && $('#row1Card1').is(':visible')) {
					$('#row1Card1').fadeOut(1500);
					$('#column1Card1').fadeOut(100);
					$('#row4Card1').fadeOut(1500);
					$('#column1Card4').fadeOut(100);
			}															
	});

	$('#column1Card4').on("click", function() {
  		$('#row4Card1').css({'display' : 'block'});
			$('#row4Card1').fadeIn("fast");


			if ($('#row4Card1').is(':visible') && $('#row1Card1').is(':visible')) {
					$('#row4Card1').fadeOut(1500);
					$('#column1Card4').fadeOut(100);
					$('#row1Card1').fadeOut(1500);
					$('#column1Card1').fadeOut(100);			
			}	
	});

// Donnie Yen//
	$('#column2Card1').on("click", function() {	
			$('#row1Card2').css({'display' : 'block'});
			$('#row1Card2').fadeIn("fast");
	
			if ($('#row3Card4').is(':visible') && $('#row1Card2').is(':visible')) {
					$('#row1Card2').fadeOut(1500);
					$('#column2Card1').fadeOut(100);
					$('#row3Card4').fadeOut(1500);
					$('#column1Card4').fadeOut(100);
			}															
	});

	$('#column4Card3').on("click", function() {
  		$('#row3Card4').css({'display' : 'block'});
			$('#row3Card4').fadeIn("fast");


			if ($('#row3Card4').is(':visible') && $('#row1Card2').is(':visible')) {
					$('#row3Card4').fadeOut(1500);
					$('#column4Card3').fadeOut(100);
					$('#row1Card2').fadeOut(1500);
					$('#column2Card1').fadeOut(100);			
			}	
	});






});



	// if (chosenCards.length === 2) {
	// 	checkForMatch();
	// }



/******* ARRAY IF NEEDED FOR REFACTORING****
let cards = [
{		name: 'Jackie-Chan',
		position1: $('#row1Card5'),
		position2: $('#row3Card2'),
},

{		name: 'Jet-Li',
		position1: $('#row1Card4'),
		position2: $('#row1Card6')
},

{		name: 'Daniel-Wu',
		position1: $('#row1Card1'),
		position2: $('#row4Card1')
},

{		name: 'Donnie-Yen',
		position1: $('#row1Card2'),
		position2: $('#row3Card4')
},

{		name: 'Tony-Jaa',
		position1: $('#row1Card3'),
		position2: $('#row2Card6')
},

{		name: 'Steven-Yeun',
		position1: $('#row2Card1'),
		position2: $('#row3Card3')
},

{		name: 'Steve-Ngo',
		position1: $('#row2Card2'),
		position2: $('#row4Card4')
},

{		name: 'Bruce-Lee',
		position1: $('#row2Card3'),
		position2: $('#row3Card5')
},

{		name: 'Sung-Kang',
		position1: $('#row2Card4'),
		position2: $('#row3Card6')
},

{		name: 'John-Cho',
		position1: $('#row2Card5'),
		position2: $('#row4Card5')
},

{		name: 'Daniel-Dae-Kim',
		position1: $('#row3Card1'),
		position2: $('#row4Card3')
},

{		name: 'Ken-Jeong',
		position1: $('#row4Card2'),
		position2: $('#row4Card6')
},

]; */