function add(num1, num2) {
	return num1 + num2;
}
function subtract(num1, num2) {
	return num1 - num2;
}
function multiply(num1, num2) {
	return num1 * num2;
}
function divide(num1, num2) {
	return num1 / num2;
}

var firstStage = true;
var firstNumber = "";
var secondNumber = "";
var operator = "";
var result; 

function main() {

	$('.btn.numeric').click(function(){
		if (firstStage === true) {
			firstNumber = firstNumber.concat($(this).text());
		}
		else {
			secondNumber = secondNumber.concat($(this).text());
		}
		console.log(firstNumber + operator + secondNumber);
	});

	$('.btn.operator').click(function(){
		if (firstStage === true){
			operator = $(this).text();
			console.log(firstNumber + operator + secondNumber);
		}
		firstStage = false;
	})

	$('.btn.double').click(function(){
		if (firstStage === true) {
			alert("please choose an operator and second number");
		} else if (firstStage === false && secondNumber === "") {
			alert("please enter a second number");
		} else {
			switch(operator) {
				case "+":
					result = add(parseInt(firstNumber), parseInt(secondNumber));
					break;
				case "-":
					result = subtract(parseInt(firstNumber), parseInt(secondNumber));
					break;
				case "*":
					result = multiply(parseInt(firstNumber), parseInt(secondNumber));
					break;
				case "/":
					result = divide(parseInt(firstNumber), parseInt(secondNumber));
					break;
				default:
					console.log("error no operator somehow");
					break;
			}
			alert(result);
			firstStage = true,firstNumber = "",secondNumber = "",result = 0,operator="";
		}
	})

}

jQuery(document).ready(main);