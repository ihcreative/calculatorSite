/******************************
*******************************
	Author: Isaak S. Hayes
	April 2013
*******************************
*******************************/

// console.log(sum);  --> To check if code is working

// Allow Drag and Drop
	function allowDrop(ev) {
		ev.preventDefault();
	}
	
//Need help disabling drop onto child elements
	function noAllowDrop(ev) {
		ev.allowDefault();
	}

	function drag(ev) {
		ev.dataTransfer.setData("Text",ev.target.id);
	}
	
	function drop(ev) {
		ev.preventDefault();
		var data=ev.dataTransfer.getData("Text");
		ev.target.appendChild(document.getElementById(data));
		
		console.log(sum);
	}
	
// Arrays for storing multiple list items --> Doesn't work
	var names = new Array(); //Declare Array
		names[0] = new Array(getElementByClass("labelValue")); //Initialize First Index
	
	var totals = new Array();
		totals[0] = new Array(getElementByClass("moneyValue"));
	
	var cats = new Array();
		cats[0] = "black";
		cats[1] = "gray";
		cats[2] = "orange";
		cats[3] = "tabby";
		
		document.write(labelValue());
		document.write(moneyValue());
	
// Calculate total
	function calculate(form){
		var sum = 0;
		for(var i = 0; i < form.numeric.length; i++)sum += Number(form.numeric[i].value);
		form.total.value = sum;	
	}
	
	function CurrencyFormatted(amount) {
	var i = parseFloat(amount);
	if(isNaN(i)) { i = 0.00; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	i = parseInt((i + .005) * 100);
	i = i / 100;
	s = new String(i);
	if(s.indexOf('.') < 0) { s += '.00'; }
	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
	s = minus + s;
	return s;
}

// Allow deletion --> Doesn't work
	var div = document.getElementById("delete")
	
// Persist input via cookie --> Doesn't work
	if (window.openDatabase){

	} else{
		alert("It seems your browser does not have support for WebSQL. Please use a browser which does, otherwise parts of this application may not run as intended."); //or any other similar message
	}

	function saveMessage(){
			var message = document.getElementById("label4");
			localStorage.setItem("message", message.value)
		}
		setInterval(saveMessage, 500);














