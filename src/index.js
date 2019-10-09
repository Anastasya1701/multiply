module.exports = function multiply(first, second) {
let firstNumber = first.split('').reverse(); //['8','3','5']
let secondNumber = second.split('').reverse(); //['9','3','2']
let stack = [];
let plus = 0;

  //['2','3','9'] j
  //['5','3','8'] i
  for(let i = 0; i<firstNumber.length; i++){ //firstNumber.length = 3
    for(let j = 0; j<secondNumber.length; j++){ //secondNumber.length = 3
        let mult = firstNumber[i] * secondNumber[j]; //8*9=72 , 8*3=24 , 8*2=16 | 3*9=27, 3*3=9, 3*2=6
        if(stack[i+j]){
          stack[i+j] += mult; // stuck[1] = 7+24 = 31, stuck[2] = 3+16 = 19 | stuck[1] = 1+27=28, stack[2] = 11+9=20, stack[3] = 3+6=9
        } else{
          stack[i+j] = mult; // stack[0] = 72 
        }

        let plus = Math.trunc(stack[i+j] / 10); //7, 3, 1 | 2, 2, 0 
        stack[i+j] = stack[i+j] % 10; //stack[0] = 2, stack[1] = 1, stack[2] = 9 | stack[1] = 8,stack[2] = 0

        if(stack[i+j+1]){
          stack[i+j+1] = stack[i+j+1] + plus; // stack[2] = 9+2=11  
        } else if(plus !=0) {
          stack[i+j+1] = plus;  // stack[1] = 7, stack[2] = 3, stack[3] = 1
        }
    }
  }
  return stack.reverse().join('')

}

//multiplay(538,239)