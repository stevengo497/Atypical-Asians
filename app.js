console.log('Up and running!');

$(document).ready(function() {

// when pic is clicked, add a new class 'Clicked' then find out if === 2 cards are clicked, see if they match, if not -- change display (the Asian pic) back to none (so it's no longer visible) and remove class 'Clicked' so that the next 2 can be shown as clicked and reran again
// max 2 cards at one time


//while method or if $('.clicked') === 2 then check for match, if not remove clicked class and picture, go back to yingyang pic

// Jackie Chan //
	$('#column5Card1').on("click", function() {	
			$('#row1Card5').css({'display' : 'block'});
			$('#row1Card5').fadeIn("fast");
			$('#row1Card5').addClass("clicked");
				let checkChan1 = function () {
						if ($('#row3Card2').is(':visible') && $('#row1Card5').is(':visible')) {
							$('#row1Card5').delay(1000).fadeOut(1500);
							$('#column5Card1').delay(1000).fadeOut(100);
							$('#row3Card2').delay(1000).fadeOut(1500);
							$('#column2Card3').delay(1000).fadeOut(100);
				}
						}
				if ($('.clicked').length > 1) {
				console.log('clicked!');
				checkChan1();
				}
					
				if ($('.clicked').length > 1) {
					$('.clicked').delay(1000).fadeOut(2000).removeClass("clicked");


				}
	});

	$('#column2Card3').on("click", function() {
  		$('#row3Card2').css({'display' : 'block'});
			$('#row3Card2').fadeIn("fast");
			$('#row3Card2').addClass("clicked");

	let checkChan2 = function () {
			if ($('#row3Card2').is(':visible') && $('#row1Card5').is(':visible')) {
					$('#row3Card2').delay(1000).fadeOut(1500);
					$('#column2Card3').delay(1000).fadeOut(100);
					$('#row1Card5').delay(1000).fadeOut(1500);
					$('#column5Card1').delay(1000).fadeOut(100);			
			}
	}			
				if ($('.clicked').length > 1) {
				console.log('clicked!');
				checkChan2();
				}	

				if ($('.clicked').length > 1) {
					$('.clicked').delay(1000).fadeOut(2000).removeClass("clicked");
				}
	});


// Jet Li //
	$('#column4Card1').on("click", function() {	
			$('#row1Card4').css({'display' : 'block'});
			$('#row1Card4').fadeIn("fast");
			$('#row1Card4').addClass("clicked");
	let checkLi1 = function () {
			if ($('#row1Card6').is(':visible') && $('#row1Card4').is(':visible')) {
					$('#row1Card4').delay(1000).fadeOut(1500);
					$('#column4Card1').delay(1000).fadeOut(100);
					$('#row1Card6').delay(1000).fadeOut(1500);
					$('#column6Card1').delay(1000).fadeOut(100);
	}		
			}		
				if ($('.clicked').length > 1) {
				console.log('clicked!');
				checkLi1();
				}	

				if ($('.clicked').length > 1) {
					$('.clicked').delay(1000).fadeOut(2000).removeClass("clicked");
				}
	});

	$('#column6Card1').on("click", function() {
  		$('#row1Card6').css({'display' : 'block'});
			$('#row1Card6').fadeIn("fast");
			$('#row1Card6').addClass("clicked");
	let checkLi2 = function () {		
			if ($('#row1Card6').is(':visible') && $('#row1Card4').is(':visible')) {
					$('#row1Card6').delay(1000).fadeOut(1500);
					$('#column6Card1').delay(1000).fadeOut(100);
					$('#row1Card4').delay(1000).fadeOut(1500);
					$('#column4Card1').delay(1000).fadeOut(100);			
	}		
			}	
				if ($('.clicked').length > 1) {
				console.log('clicked!');
				checkLi2();
				}

				if ($('.clicked').length > 1) {
					$('.clicked').delay(1000).fadeOut(2000).removeClass("clicked");
				}
	});


// Daniel Wu//
	$('#column1Card1').on("click", function() {	
			$('#row1Card1').css({'display' : 'block'});
			$('#row1Card1').fadeIn("fast");
	
			if ($('#row4Card1').is(':visible') && $('#row1Card1').is(':visible')) {
					$('#row1Card1').delay(1000).fadeOut(1500);
					$('#column1Card1').delay(1000).fadeOut(100);
					$('#row4Card1').delay(1000).fadeOut(1500);
					$('#column1Card4').delay(1000).fadeOut(100);
			}															
	});

	$('#column1Card4').on("click", function() {
  		$('#row4Card1').css({'display' : 'block'});
			$('#row4Card1').fadeIn("fast");


			if ($('#row4Card1').is(':visible') && $('#row1Card1').is(':visible')) {
					$('#row4Card1').delay(1000).fadeOut(1500);
					$('#column1Card4').delay(1000).fadeOut(100);
					$('#row1Card1').delay(1000).fadeOut(1500);
					$('#column1Card1').delay(1000).fadeOut(100);			
			}	
	});

// Donnie Yen//
	$('#column2Card1').on("click", function() {	
			$('#row1Card2').css({'display' : 'block'});
			$('#row1Card2').fadeIn("fast");
	
			if ($('#row3Card4').is(':visible') && $('#row1Card2').is(':visible')) {
					$('#row1Card2').delay(1000).fadeOut(1500);
					$('#column2Card1').delay(1000).fadeOut(100);
					$('#row3Card4').delay(1000).fadeOut(1500);
					$('#column4Card3').delay(1000).fadeOut(100);
			}															
	});

	$('#column4Card3').on("click", function() {
  		$('#row3Card4').css({'display' : 'block'});
			$('#row3Card4').fadeIn("fast");


			if ($('#row3Card4').is(':visible') && $('#row1Card2').is(':visible')) {
					$('#row3Card4').delay(1000).fadeOut(1500);
					$('#column4Card3').delay(1000).fadeOut(100);
					$('#row1Card2').delay(1000).fadeOut(1500);
					$('#column2Card1').delay(1000).fadeOut(100);			
			}	
	});


//Tony Jaa
	$('#column3Card1').on("click", function() {	
			$('#row1Card3').css({'display' : 'block'});
			$('#row1Card3').fadeIn("fast");
	
			if ($('#row2Card6').is(':visible') && $('#row1Card3').is(':visible')) {
					$('#row1Card3').delay(1000).fadeOut(1500);
					$('#column3Card1').delay(1000).fadeOut(100);
					$('#row2Card6').delay(1000).fadeOut(1500);
					$('#column6Card2').delay(1000).fadeOut(100);
			}															
	});

	$('#column6Card2').on("click", function() {
  		$('#row2Card6').css({'display' : 'block'});
			$('#row2Card6').fadeIn("fast");


			if ($('#row2Card6').is(':visible') && $('#row1Card3').is(':visible')) {
					$('#row2Card6').delay(1000).fadeOut(1500);
					$('#column6Card2').delay(1000).fadeOut(100);
					$('#row1Card3').delay(1000).fadeOut(1500);
					$('#column3Card1').delay(1000).fadeOut(100);			
			}	
	});

//Steven Yeun
	$('#column1Card2').on("click", function() {	
			$('#row2Card1').css({'display' : 'block'});
			$('#row2Card1').fadeIn("fast");
	
			if ($('#row3Card3').is(':visible') && $('#row2Card1').is(':visible')) {
					$('#row2Card1').delay(1000).fadeOut(1500);
					$('#column1Card2').delay(1000).fadeOut(100);
					$('#row3Card3').delay(1000).fadeOut(1500);
					$('#column3Card3').delay(1000).fadeOut(100);
			}															
	});

	$('#column3Card3').on("click", function() {
  		$('#row3Card3').css({'display' : 'block'});
			$('#row3Card3').fadeIn("fast");


			if ($('#row3Card3').is(':visible') && $('#row2Card1').is(':visible')) {
					$('#row3Card3').delay(1000).fadeOut(1500);
					$('#column3Card3').delay(1000).fadeOut(100);
					$('#row2Card1').delay(1000).fadeOut(1500);
					$('#column1Card2').delay(1000).fadeOut(100);			
			}	
	});

//Steve Ngo
	$('#column2Card2').on("click", function() {	
			$('#row2Card2').css({'display' : 'block'});
			$('#row2Card2').fadeIn("fast");
	
			if ($('#row4Card4').is(':visible') && $('#row2Card2').is(':visible')) {
					$('#row2Card2').delay(1000).fadeOut(1500);
					$('#column2Card2').delay(1000).fadeOut(100);
					$('#row4Card4').delay(1000).fadeOut(1500);
					$('#column4Card4').delay(1000).fadeOut(100);
			}															
	});

	$('#column4Card4').on("click", function() {
  		$('#row4Card4').css({'display' : 'block'});
			$('#row4Card4').fadeIn("fast");


			if ($('#row4Card4').is(':visible') && $('#row2Card2').is(':visible')) {
					$('#row4Card4').delay(1000).fadeOut(1500);
					$('#column4Card4').delay(1000).fadeOut(100);
					$('#row2Card2').delay(1000).fadeOut(1500);
					$('#column2Card2').delay(1000).fadeOut(100);			
			}	
	});


//Bruce Lee
	$('#column3Card2').on("click", function() {	
			$('#row2Card3').css({'display' : 'block'});
			$('#row2Card3').fadeIn("fast");
	
			if ($('#row3Card5').is(':visible') && $('#row2Card3').is(':visible')) {
					$('#row2Card3').delay(1000).fadeOut(1500);
					$('#column3Card2').delay(1000).fadeOut(100);
					$('#row3Card5').delay(1000).fadeOut(1500);
					$('#column5Card3').delay(1000).fadeOut(100);
			}															
	});

	$('#column5Card3').on("click", function() {
  		$('#row3Card5').css({'display' : 'block'});
			$('#row3Card5').fadeIn("fast");


			if ($('#row3Card5').is(':visible') && $('#row2Card3').is(':visible')) {
					$('#row3Card5').delay(1000).fadeOut(1500);
					$('#column5Card3').delay(1000).fadeOut(100);
					$('#row2Card3').delay(1000).fadeOut(1500);
					$('#column3Card2').delay(1000).fadeOut(100);			
			}	
	});

	//Sung Kang
	$('#column4Card2').on("click", function() {	
			$('#row2Card4').css({'display' : 'block'});
			$('#row2Card4').fadeIn("fast");
	
			if ($('#row3Card6').is(':visible') && $('#row2Card4').is(':visible')) {
					$('#row2Card4').delay(1000).fadeOut(1500);
					$('#column4Card2').delay(1000).fadeOut(100);
					$('#row3Card6').delay(1000).fadeOut(1500);
					$('#column6Card3').delay(1000).fadeOut(100);
			}															
	});

	$('#column6Card3').on("click", function() {
  		$('#row3Card6').css({'display' : 'block'});
			$('#row3Card6').fadeIn("fast");


			if ($('#row3Card6').is(':visible') && $('#row2Card4').is(':visible')) {
					$('#row3Card6').delay(1000).fadeOut(1500);
					$('#column6Card3').delay(1000).fadeOut(100);
					$('#row2Card4').delay(1000).fadeOut(1500);
					$('#column4Card2').delay(1000).fadeOut(100);			
			}	
	});

	//John Cho
	$('#column5Card2').on("click", function() {	
			$('#row2Card5').css({'display' : 'block'});
			$('#row2Card5').fadeIn("fast");
	
			if ($('#row4Card5').is(':visible') && $('#row2Card5').is(':visible')) {
					$('#row2Card5').delay(1000).fadeOut(1500);
					$('#column5Card2').delay(1000).fadeOut(100);
					$('#row4Card5').delay(1000).fadeOut(1500);
					$('#column5Card4').delay(1000).fadeOut(100);
			}															
	});

	$('#column5Card4').on("click", function() {
  		$('#row4Card5').css({'display' : 'block'});
			$('#row4Card5').fadeIn("fast");


			if ($('#row4Card5').is(':visible') && $('#row2Card5').is(':visible')) {
					$('#row4Card5').delay(1000).fadeOut(1500);
					$('#column5Card4').delay(1000).fadeOut(100);
					$('#row2Card5').delay(1000).fadeOut(1500);
					$('#column5Card2').delay(1000).fadeOut(100);			
			}	
	});

	//Ken Jeong
	$('#column2Card4').on("click", function() {	
			$('#row4Card2').css({'display' : 'block'});
			$('#row4Card2').fadeIn("fast");
	
			if ($('#row4Card6').is(':visible') && $('#row4Card2').is(':visible')) {
					$('#row4Card2').delay(1000).fadeOut(1500);
					$('#column2Card4').delay(1000).fadeOut(100);
					$('#row4Card6').delay(1000).fadeOut(1500);
					$('#column6Card4').delay(1000).fadeOut(100);
			}															
	});

	$('#column6Card4').on("click", function() {
  		$('#row4Card6').css({'display' : 'block'});
			$('#row4Card6').fadeIn("fast");


			if ($('#row4Card6').is(':visible') && $('#row4Card2').is(':visible')) {
					$('#row4Card6').delay(1000).fadeOut(1500);
					$('#column6Card4').delay(1000).fadeOut(100);
					$('#row4Card2').delay(1000).fadeOut(1500);
					$('#column2Card4').delay(1000).fadeOut(100);			
			}	
	});

	//Daniel Dae Kim
	$('#column1Card3').on("click", function() {	
			$('#row3Card1').css({'display' : 'block'});
			$('#row3Card1').fadeIn("fast");
	
			if ($('#row4Card3').is(':visible') && $('#row3Card1').is(':visible')) {
					$('#row3Card1').delay(1000).fadeOut(1500);
					$('#column1Card3').delay(1000).fadeOut(100);
					$('#row4Card3').delay(1000).fadeOut(1500);
					$('#column3Card4').delay(1000).fadeOut(100);
			}															
	});

	$('#column3Card4').on("click", function() {
  		$('#row4Card3').css({'display' : 'block'});
			$('#row4Card3').fadeIn("fast");


			if ($('#row4Card3').is(':visible') && $('#row3Card1').is(':visible')) {
					$('#row4Card3').delay(1000).fadeOut(1500);
					$('#column3Card4').delay(1000).fadeOut(100);
					$('#row3Card1').delay(1000).fadeOut(1500);
					$('#column1Card3').delay(1000).fadeOut(100);			
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