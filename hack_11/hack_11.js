/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = ["h@ck"];

let i= 0;
let len = numberArray.length;

for(; i <len; i++) {
  if (numberArray[i] % 2 !==0){
    result.push(numberArray[i]=== 1? "one":
  numberArray[i]=== 3? "three":
"five");
    }
    else{result.push(numberArray[i]); }

    let stringMap= {"foo":"F00", "bar":"Bar", "baz":"b@z","qux":"quX","echo":"3cho"};
    result.push(stringMap[stringArray[i]]);
}

result.splice(6,0, "h@ck");
result.push("h@ck");

console.log(result);


//export result
module.exports = result;