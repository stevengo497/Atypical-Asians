console.log('Up and running!');

$(document).ready(function() {

// Need to only allow 2 cards to play at the same time, CANNOT click until 2 unmatched cards are turned back around.
// maybe if matched or unmatched, cannot use click function
//only needed if unmatch, if match they can keep clicking
//maybe all yinYang classes delayed from being pressed

//if match, css animation = scale (1.5, 1.5), add new class if matched

// Jackie Chan //
	$('#column5Card1').on("click", function() {	
			$('#row1Card5').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
		
		let checkChan1 = function () {
			if ($('#row3Card2').is(':visible') && $('#row1Card5').is(':visible')) {
					$('#row1Card5').delay(1000).fadeOut(1500);
					$('#column5Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row3Card2').delay(1000).fadeOut(1500);
					$('#column2Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					
			}
		}
				if ($('.clicked').length > 1) {
					checkChan1();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});

	$('#column2Card3').on("click", function() {	 
			$('#row3Card2').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");

		let checkChan2 = function () {
			if ($('#row3Card2').is(':visible') && $('#row1Card5').is(':visible')) {
					$('#row3Card2').delay(1000).fadeOut(1500);
					$('#column2Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row1Card5').delay(1000).fadeOut(1500);
					$('#column5Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
								
			}
		}	
				if ($('.clicked').length > 1) {
					checkChan2();
				}	

				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});


// Jet Li //
	$('#column4Card1').on("click", function() {	
			$('#row1Card4').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
		
		let checkLi1 = function () {
			if ($('#row1Card6').is(':visible') && $('#row1Card4').is(':visible')) {
					$('#row1Card4').delay(1000).fadeOut(1500);
					$('#column4Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row1Card6').delay(1000).fadeOut(1500);
					$('#column6Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					
			}
		}	
				if ($('.clicked').length > 1) {
					checkLi1();
				}	

				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});

	$('#column6Card1').on("click", function() {
  		$('#row1Card6').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
		
		let checkLi2 = function () {		
			if ($('#row1Card6').is(':visible') && $('#row1Card4').is(':visible')) {
					$('#row1Card6').delay(1000).fadeOut(1500);
					$('#column6Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row1Card4').delay(1000).fadeOut(1500);
					$('#column4Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
								
			}
		}
				if ($('.clicked').length > 1) {
					checkLi2();
				}

				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});


// Daniel Wu//
	$('#column1Card1').on("click", function() {	
			$('#row1Card1').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
			
		let checkWu1 = function () {
			if ($('#row4Card1').is(':visible') && $('#row1Card1').is(':visible')) {
					$('#row1Card1').delay(1000).fadeOut(1500);
					$('#column1Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row4Card1').delay(1000).fadeOut(1500);
					$('#column1Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
			}
		}
				if ($('.clicked').length > 1) {
					checkWu1();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}		

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}												
	});

	$('#column1Card4').on("click", function() {
  		$('#row4Card1').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
				
		let checkWu2 = function () {
			if ($('#row4Card1').is(':visible') && $('#row1Card1').is(':visible')) {
					$('#row4Card1').delay(1000).fadeOut(1500);
					$('#column1Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row1Card1').delay(1000).fadeOut(1500);
					$('#column1Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');			
			}	
		}
				if ($('.clicked').length > 1) {
					checkWu2();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}	

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});

// Donnie Yen//
	$('#column2Card1').on("click", function() {	
			$('#row1Card2').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
				
		let checkYen1 = function () {
			if ($('#row3Card4').is(':visible') && $('#row1Card2').is(':visible')) {
					$('#row1Card2').delay(1000).fadeOut(1500);
					$('#column2Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row3Card4').delay(1000).fadeOut(1500);
					$('#column4Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
			}
		}
				if ($('.clicked').length > 1) {
					checkYen1();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}		

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}												
	});

	$('#column4Card3').on("click", function() {
  		$('#row3Card4').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
					
		let checkYen2 = function () {
			if ($('#row3Card4').is(':visible') && $('#row1Card2').is(':visible')) {
					$('#row3Card4').delay(1000).fadeOut(1500);
					$('#column4Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row1Card2').delay(1000).fadeOut(1500);
					$('#column2Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');			
			}	
		}
				if ($('.clicked').length > 1) {
					checkYen2();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});			

//Tony Jaa
	$('#column3Card1').on("click", function() {	
			$('#row1Card3').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");		
		
		let checkJaa1 = function () {
			if ($('#row2Card6').is(':visible') && $('#row1Card3').is(':visible')) {
					$('#row1Card3').delay(1000).fadeOut(1500);
					$('#column3Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row2Card6').delay(1000).fadeOut(1500);
					$('#column6Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
			}
		}
				if ($('.clicked').length > 1) {
					checkJaa1();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}		

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}											
	});

	$('#column6Card2').on("click", function() {
  		$('#row2Card6').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
				
		let checkJaa2 = function () {
			if ($('#row2Card6').is(':visible') && $('#row1Card3').is(':visible')) {
					$('#row2Card6').delay(1000).fadeOut(1500);
					$('#column6Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row1Card3').delay(1000).fadeOut(1500);
					$('#column3Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');			
			}	
		}
				if ($('.clicked').length > 1) {
					checkJaa2();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});

//Steven Yeun
	$('#column1Card2').on("click", function() {	
			$('#row2Card1').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");	
		
		let checkYeun1 = function () {
			if ($('#row3Card3').is(':visible') && $('#row2Card1').is(':visible')) {
					$('#row2Card1').delay(1000).fadeOut(1500);
					$('#column1Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row3Card3').delay(1000).fadeOut(1500);
					$('#column3Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
			}
		}
				if ($('.clicked').length > 1) {
					checkYeun1();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}													

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}	
	});

	$('#column3Card3').on("click", function() {
  		$('#row3Card3').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
					
		let checkYeun2 = function () {
			if ($('#row3Card3').is(':visible') && $('#row2Card1').is(':visible')) {
					$('#row3Card3').delay(1000).fadeOut(1500);
					$('#column3Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row2Card1').delay(1000).fadeOut(1500);
					$('#column1Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');			
			}	
		}
				if ($('.clicked').length > 1) {
					checkYeun2();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});			

//Steve Ngo
	$('#column2Card2').on("click", function() {	
			$('#row2Card2').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");		
		
		let checkNgo1 = function () {
			if ($('#row4Card4').is(':visible') && $('#row2Card2').is(':visible')) {
					$('#row2Card2').delay(1000).fadeOut(1500);
					$('#column2Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row4Card4').delay(1000).fadeOut(1500);
					$('#column4Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
			}
		}
				if ($('.clicked').length > 1) {
					checkNgo1();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}													

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});

	$('#column4Card4').on("click", function() {
  		$('#row4Card4').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
					
		let checkNgo2 = function () {
			if ($('#row4Card4').is(':visible') && $('#row2Card2').is(':visible')) {
					$('#row4Card4').delay(1000).fadeOut(1500);
					$('#column4Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row2Card2').delay(1000).fadeOut(1500);
					$('#column2Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');			
			}	
	}
				if ($('.clicked').length > 1) {
					checkNgo2();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});			

//Bruce Lee
	$('#column3Card2').on("click", function() {	
			$('#row2Card3').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");			
		
		let checkLee1 = function () {
			if ($('#row3Card5').is(':visible') && $('#row2Card3').is(':visible')) {
					$('#row2Card3').delay(1000).fadeOut(1500);
					$('#column3Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row3Card5').delay(1000).fadeOut(1500);
					$('#column5Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
			}
		}
				if ($('.clicked').length > 1) {
					checkLee1();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}		

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}											
	});

	$('#column5Card3').on("click", function() {
  		$('#row3Card5').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
				
		let checkLee2 = function () {
			if ($('#row3Card5').is(':visible') && $('#row2Card3').is(':visible')) {
					$('#row3Card5').delay(1000).fadeOut(1500);
					$('#column5Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row2Card3').delay(1000).fadeOut(1500);
					$('#column3Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');			
			}	
		}				
				if ($('.clicked').length > 1) {
					checkLee2();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});

	//Sung Kang
	$('#column4Card2').on("click", function() {	
			$('#row2Card4').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
			
		let checkKang1 = function () {
			if ($('#row3Card6').is(':visible') && $('#row2Card4').is(':visible')) {
					$('#row2Card4').delay(1000).fadeOut(1500);
					$('#column4Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row3Card6').delay(1000).fadeOut(1500);
					$('#column6Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
			}
		}
				if ($('.clicked').length > 1) {
					checkKang1();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}	

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}											
	});

	$('#column6Card3').on("click", function() {
  		$('#row3Card6').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
					
		let checkKang2 = function () {
			if ($('#row3Card6').is(':visible') && $('#row2Card4').is(':visible')) {
					$('#row3Card6').delay(1000).fadeOut(1500);
					$('#column6Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row2Card4').delay(1000).fadeOut(1500);
					$('#column4Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');			
			}	
		}
				if ($('.clicked').length > 1) {
					checkKang2();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});			

	//John Cho
	$('#column5Card2').on("click", function() {	
			$('#row2Card5').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
			
		let checkCho1 = function () {
			if ($('#row4Card5').is(':visible') && $('#row2Card5').is(':visible')) {
					$('#row2Card5').delay(1000).fadeOut(1500);
					$('#column5Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row4Card5').delay(1000).fadeOut(1500);
					$('#column5Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
			}
		}
				if ($('.clicked').length > 1) {
					checkCho1();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}		

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}												
	});

	$('#column5Card4').on("click", function() {
  		$('#row4Card5').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
					
		let checkCho2 = function () {
			if ($('#row4Card5').is(':visible') && $('#row2Card5').is(':visible')) {
					$('#row4Card5').delay(1000).fadeOut(1500);
					$('#column5Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row2Card5').delay(1000).fadeOut(1500);
					$('#column5Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');			
			}	
		}
				if ($('.clicked').length > 1) {
					checkCho2();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});			

	//Ken Jeong
	$('#column2Card4').on("click", function() {	
			$('#row4Card2').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");			
		
		let checkJeong1 = function () {
			if ($('#row4Card6').is(':visible') && $('#row4Card2').is(':visible')) {
					$('#row4Card2').delay(1000).fadeOut(1500);
					$('#column2Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row4Card6').delay(1000).fadeOut(1500);
					$('#column6Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
			}
		}
				if ($('.clicked').length > 1) {
					checkJeong1();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				} 														

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});

	$('#column6Card4').on("click", function() {
  		$('#row4Card6').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
			
		let checkJeong2 = function () {
			if ($('#row4Card6').is(':visible') && $('#row4Card2').is(':visible')) {
					$('#row4Card6').delay(1000).fadeOut(1500);
					$('#column6Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row4Card2').delay(1000).fadeOut(1500);
					$('#column2Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');			
			}	
		}
				if ($('.clicked').length > 1) {
					checkJeong2();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});			

	//Daniel Dae Kim
	$('#column1Card3').on("click", function() {	
			$('#row3Card1').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
			
		let checkKim1 = function () {
			if ($('#row4Card3').is(':visible') && $('#row3Card1').is(':visible')) {
					$('#row3Card1').delay(1000).fadeOut(1500);
					$('#column1Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row4Card3').delay(1000).fadeOut(1500);
					$('#column3Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
			}
		}
				if ($('.clicked').length > 1) {
					checkKim1();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}													

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
				}
	});

	$('#column3Card4').on("click", function() {
  		$('#row4Card3').css({'display' : 'block'}).fadeIn("fast").addClass("clicked");
			
		let checkKim2 = function () {
			if ($('#row4Card3').is(':visible') && $('#row3Card1').is(':visible')) {
					$('#row4Card3').delay(1000).fadeOut(1500);
					$('#column3Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
					$('#row3Card1').delay(1000).fadeOut(1500);
					$('#column1Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');			
			}	
		}
				if ($('.clicked').length > 1) {
					checkKim2();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(200).removeClass("clicked");
				}

				if ($('.yinYangRemove').length === 0) {
					alert('Congrats! You know your Asians!');
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