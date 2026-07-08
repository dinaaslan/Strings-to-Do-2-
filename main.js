//this function will reverse a string// 
var word="Dina"
function reverseString(str){
    var reversed ="";
    for(var i= str.length-1; i>=0; i--){
        reversed +=str[i];
    }
    return reversed;
}
console.log(reverseString(word));

//this function will remove even-length strings//
var items=["phone", "ring", "chair", "book", "pen"];
function removeEvenLengthStrings(arr){
    var result=[]; 
    for(var i=0; i<arr.length; i++){
        if (arr[i].length % 2 !==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeEvenLengthStrings(items));

//this function will convert positive integers (less than 4000) into its Roman symbols//
//symbols: I= 1 V=5, X=10, L=50, C=100, D=500, M=1000//
var value=[1000, 900, 500, 100, 50, 10, 5, 1];
var symbols=["M", "CM", "D", "C", "L", "X", "V", "I"];
function inToRoman(num){ 
    var roman="";
    for(var i=0; i< value.length; i++){
        while (num >=value[i]){
            roman +=symbols[i];
            num -=value[i];
        }
    } return roman;
}
console.log(inToRoman(120));

//this function will convert Roman numeral string into its integer value//
function romanToInt(roman) {
    var values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var result = 0;
    for (var i = 0; i < roman.length; i++) {
        var current = values[roman[i]];
        var next = values[roman[i + 1]];
        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    return result;
}
console.log(romanToInt("IX"));     