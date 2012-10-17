$(function(){

	//attach keyup listener to our main text input
	$('#noteInput').keyup(function(key){
		var i, //counter
			img, //stores the url for each letter image to display
			longest, //how many times we loop
			typed = $(this).val(), //the value the user typed in
			typedLetters = typed.split(""), //an array of all characters typed
			elements = $('#noteOutput').children(), //the existing DOM elements for our letter display
			//spaceCode = '<img class="space" src="img/dot.gif" data-letter=" " />', //code for a space
			brCode = '<br data-letter="br" />'; //code for a linebreak

		//get count for the loop which needs to accomodate the longest array:
		//either the letters in the <textarea> or what's displayed on screen
		longest = (typedLetters.length<elements.length) ? elements.length : typedLetters.length;
		
		/*
		if (typedLetters.length<elements.length) {
			longest = elements.length;
		} else {
			longest = typedLetters.length;
		}
		*/

		//loop through everything
		for(i=0; i<longest; i++) {
			//there is no element on the screen for something typed into the field
			if( elements[i] === undefined ) {
				//handle line breaks
				if (typedLetters[i] === "\n") {
					$('#noteOutput').append(brCode);
				//handle letter swaps
				} else {
					img = getImageFromLetter( typedLetters[i] );
					$('#noteOutput').append('<img src="' + img + '" data-letter="' + typedLetters[i] + '" />');
				}

			//there is an element
			} else {
				//if there's no corresponding typed letter, remove the element on screen
				if (typedLetters[i] === undefined) { 
					$(elements[i]).remove();

				} else if (typedLetters[i] === "\n") {
					//replace a letter with a <br/> tag
					if ($(elements[i]).data('letter') !== "br") 
						$(elements[i]).replaceWith(brCode);

				//letter doesn't match element so swap the element with a new letter
				} else if ( $(elements[i]).data('letter') !== typedLetters[i] ) {
					//handle spaces
					if (typedLetters[i] === "\n") {
						$(elements[i]).replaceWith(brCode);
					//handle letter swaps
					} else {
						img = getImageFromLetter( typedLetters[i] );
						$(elements[i]).replaceWith('<img src="' + img + '" data-letter="' + typedLetters[i] + '" />');
					}
				}
			}
		}
	});
});

function getImageFromLetter( ltr ) {
	var letter, i, rnd;
	//loop through all letter objects in our data map
	for (i=0; i<letters.length; i++) {
		//if this letter matches the letter given to this function
		if ( String(ltr).toLowerCase() === letters[i].letter ) {
			letter = letters[i];
			break;
		}
	}
	
	if (letter) {
		rnd = Math.floor( Math.random() * letter.images.length );
		return letter.images[rnd];
		
	} else return "";
	
}


var letters = [
	{
		letter: "a",
		images: ["img/letters/a-1.jpg", "img/letters/a-2.jpg"]
	},
	{
		letter: "b",
		images: ["img/letters/b-1.jpg", "img/letters/b-2.jpg"]
	},
	{
		letter: "c",
		images: ["img/letters/c-1.jpg", "img/letters/c-2.jpg"]
	},
	{
		letter: "d",
		images: ["img/letters/d-1.jpg", "img/letters/d-2.jpg"]
	},
	{
		letter: "e",
		images: ["img/letters/e-1.jpg", "img/letters/e-2.jpg"]
	},
	{
		letter: "f",
		images: ["img/letters/f-1.jpg", "img/letters/f-2.jpg"]
	},
	{
		letter: "g",
		images: ["img/letters/g-1.jpg", "img/letters/g-2.jpg"]
	},
	{
		letter: "h",
		images: ["img/letters/h-1.jpg", "img/letters/h-2.jpg"]
	},
	{
		letter: "i",
		images: ["img/letters/i-1.jpg", "img/letters/i-2.jpg"]
	},
	{
		letter: "j",
		images: ["img/letters/j-1.jpg", "img/letters/j-2.jpg"]
	},
	{
		letter: "k",
		images: ["img/letters/k-1.jpg", "img/letters/k-2.jpg"]
	},
	{
		letter: "l",
		images: ["img/letters/l-1.jpg", "img/letters/l-2.jpg"]
	},
	{
		letter: "m",
		images: ["img/letters/m-1.jpg", "img/letters/m-2.jpg"]
	},
	{
		letter: "n",
		images: ["img/letters/n-1.jpg", "img/letters/n-2.jpg"]
	},
	{
		letter: "o",
		images: ["img/letters/o-1.jpg", "img/letters/o-2.jpg"]
	},
	{
		letter: "p",
		images: ["img/letters/p-1.jpg", "img/letters/p-2.jpg"]
	},
	{
		letter: "q",
		images: ["img/letters/q-1.jpg", "img/letters/q-2.jpg"]
	},
	{
		letter: "r",
		images: ["img/letters/r-1.jpg", "img/letters/r-2.jpg"]
	},
	{
		letter: "s",
		images: ["img/letters/s-1.jpg", "img/letters/s-2.jpg"]
	},
	{
		letter: "t",
		images: ["img/letters/t-1.jpg", "img/letters/t-2.jpg"]
	},
	{
		letter: "u",
		images: ["img/letters/u-1.jpg", "img/letters/u-2.jpg"]
	},
	{
		letter: "v",
		images: ["img/letters/v-1.jpg", "img/letters/v-2.jpg"]
	},
	{
		letter: "w",
		images: ["img/letters/w-1.jpg", "img/letters/w-2.jpg"]
	},
	{
		letter: "x",
		images: ["img/letters/x-1.jpg", "img/letters/x-2.jpg"]
	},
	{
		letter: "y",
		images: ["img/letters/y-1.jpg", "img/letters/y-2.jpg"]
	},
	{
		letter: "z",
		images: ["img/letters/z-1.jpg", "img/letters/z-2.jpg"]
	},
	{
		letter: "0",
		images: ["img/letters/0-1.jpg"]
	},
	{
		letter: "1",
		images: ["img/letters/1-1.jpg"]
	},
	{
		letter: "2",
		images: ["img/letters/2-1.jpg"]
	},
	{
		letter: "3",
		images: ["img/letters/3-1.jpg"]
	},
	{
		letter: "4",
		images: ["img/letters/4-1.jpg"]
	},
	{
		letter: "5",
		images: ["img/letters/5-1.jpg"]
	},
	{
		letter: "6",
		images: ["img/letters/6-1.jpg"]
	},
	{
		letter: "7",
		images: ["img/letters/7-1.jpg"]
	},
	{
		letter: "8",
		images: ["img/letters/8-1.jpg"]
	},
	{
		letter: "9",
		images: ["img/letters/9-1.jpg"]
	},
	{
		letter: ":",
		images: ["img/letters/colon-1.jpg"]
	},
	{
		letter: ",",
		images: ["img/letters/comma-1.jpg"]
	},
	{
		letter: "-",
		images: ["img/letters/dash-1.jpg"]
	},
	{
		letter: "$",
		images: ["img/letters/dollar-1.jpg"]
	},
	{
		letter: "(",
		images: ["img/letters/left-paren-1.jpg"]
	},
	{
		letter: ")",
		images: ["img/letters/right-paren-1.jpg"]
	},
	{
		letter: ".",
		images: ["img/letters/period-1.jpg"]
	},
	{
		letter: "?",
		images: ["img/letters/question-mark-1.jpg"]
	},
	{
		letter: "'",
		images: ["img/letters/rsquo-1.jpg"]
	},
	{
		letter: "!",
		images: ["img/letters/exclam-1.jpg"]
	},
	{
		letter: " ",
		images: ["img/letters/space.gif"]
	}
];















