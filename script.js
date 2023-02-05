let stats = document.querySelector('.status');
	let text = document.getElementById('text');
	let char = document.getElementById('char');
	let words = document.getElementById('words');
	let lines = document.getElementById('lines');
	let symbols = document.getElementById('symbols');
		function count() {
		if(text.value.length === 0){ 
			stats.style.display = "none";
		}
		else{
			stats.style.display = "block";
			char.innerHTML = text.value.length + " Characters" // Char Length
		words.innerHTML = text.value.trim().split(/\s+/).length + " Words"; //words Length
		lines.innerHTML = text.value.split("\n").length + " Lines"; //lines
		symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " Symbols" // Symbols Length
		}
	}
text.addEventListener("input", count);
//You may also insert this JS Script inside the HTML directly .
// Created by Hussein M.
