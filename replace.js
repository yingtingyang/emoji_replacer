//Please try it with http://www.beinghuman.org/article/basic-emotions

var smile = "\ud83d\ude01";
var cry = "\ud83d\ude22";
var angry = "\ud83d\ude21";
var disgust = "\ud83d\ude30";
var love = "\ud83d\ude0d";
var fear = "\ud83d\ude31";

emotion1(function(textNodes) {
	console.log('searching DOM tree');
	for (var i = 0; i < textNodes.length; i++) {
  	var text = textNodes[i].nodeValue;
  	textNodes[i].nodeValue = text.replace(/sad|bitter|sorry/g, cry);
	}
});

emotion2(function(textNodes) {
	console.log('searching DOM tree');
	for (var i = 0; i < textNodes.length; i++) {
  	var text = textNodes[i].nodeValue;
  	textNodes[i].nodeValue = text.replace(/smile|happy|joy/g, smile); 	
	}
});

emotion3(function(textNodes) {
	console.log('searching DOM tree');
	for (var i = 0; i < textNodes.length; i++) {
  	var text = textNodes[i].nodeValue; 	
  	textNodes[i].nodeValue = text.replace(/hate|anger|annoy/g, angry);
	}
});

emotion4(function(textNodes) {
	console.log('searching DOM tree');
	for (var i = 0; i < textNodes.length; i++) {
  	var text = textNodes[i].nodeValue; 	
  	textNodes[i].nodeValue = text.replace(/disgust|loathing|nausea/g, disgust);
	}
});

emotion5(function(textNodes) {
	console.log('searching DOM tree');
	for (var i = 0; i < textNodes.length; i++) {
  	var text = textNodes[i].nodeValue; 	
  	textNodes[i].nodeValue = text.replace(/love|affection|relationship/g, love);
	}
});

emotion6(function(textNodes) {
	console.log('searching DOM tree');
	for (var i = 0; i < textNodes.length; i++) {
  	var text = textNodes[i].nodeValue; 	
  	textNodes[i].nodeValue = text.replace(/fear|affraid|scare/g, fear);
	}
});

function emotion1(callback) {
	var elements = document.querySelectorAll("body, body *");
	var results = [];

	for (var i = 0; i < elements.length; i++) {	
		if (elements[i].hasChildNodes()) { 
			for (var j = 0; j < elements[i].childNodes.length; j++) {
				if (elements[i].childNodes[j].nodeType == 3) {
					results.push(elements[i].childNodes[j]);
				}
			}
		}
	}

	callback(results);
}

function emotion2(callback) {
	var elements = document.querySelectorAll("body, body *");
	var results = [];

	for (var i = 0; i < elements.length; i++) {	
		if (elements[i].hasChildNodes()) { 
			for (var j = 0; j < elements[i].childNodes.length; j++) {
				if (elements[i].childNodes[j].nodeType == 3) {
					results.push(elements[i].childNodes[j]);
				}
			}
		}
	}

	callback(results);
}

function emotion3(callback) {
	var elements = document.querySelectorAll("body, body *");
	var results = [];

	for (var i = 0; i < elements.length; i++) {	
		if (elements[i].hasChildNodes()) { 
			for (var j = 0; j < elements[i].childNodes.length; j++) {
				if (elements[i].childNodes[j].nodeType == 3) {
					results.push(elements[i].childNodes[j]);
				}
			}
		}
	}

	callback(results);
}

function emotion4(callback) {
	var elements = document.querySelectorAll("body, body *");
	var results = [];

	for (var i = 0; i < elements.length; i++) {	
		if (elements[i].hasChildNodes()) { 
			for (var j = 0; j < elements[i].childNodes.length; j++) {
				if (elements[i].childNodes[j].nodeType == 3) {
					results.push(elements[i].childNodes[j]);
				}
			}
		}
	}

	callback(results);
}

function emotion5(callback) {
	var elements = document.querySelectorAll("body, body *");
	var results = [];

	for (var i = 0; i < elements.length; i++) {	
		if (elements[i].hasChildNodes()) { 
			for (var j = 0; j < elements[i].childNodes.length; j++) {
				if (elements[i].childNodes[j].nodeType == 3) {
					results.push(elements[i].childNodes[j]);
				}
			}
		}
	}

	callback(results);
}

function emotion6(callback) {
	var elements = document.querySelectorAll("body, body *");
	var results = [];

	for (var i = 0; i < elements.length; i++) {	
		if (elements[i].hasChildNodes()) { 
			for (var j = 0; j < elements[i].childNodes.length; j++) {
				if (elements[i].childNodes[j].nodeType == 3) {
					results.push(elements[i].childNodes[j]);
				}
			}
		}
	}

	callback(results);
}