module.exports = function multiply(first, second) {
let firstNumber = first.split('').reverse(); //['8','3','5']
let secondNumber = second.split('').reverse(); //['9','3','2']
let mainMas = [];
let plus = 0;

  //['2','3','9'] j
  //['5','3','8'] i
  for(let i = 0; i<firstNumber.length; i++){ //firstNumber.length = 3
    for(let j = 0; j<secondNumber.length; j++){ //secondNumber.length = 3
        let mult = firstNumber[i] * secondNumber[j]; //8*9=72 , 8*3=24 , 8*2=16 | 3*9=27, 3*3=9, 3*2=6
        if(mainMas[i+j]){
          mainMas[i+j] += mult; // mainMas[1] = 7+24 = 31, mainMas[2] = 3+16 = 19 | mainMas[1] = 1+27=28, mainMas[2] = 11+9=20, mainMas[3] = 3+6=9
        } else{
          mainMas[i+j] = mult; // mainMas[0] = 72 
        }

        let plus = Math.trunc(mainMas[i+j] / 10); //7, 3, 1 | 2, 2, 0 
        mainMas[i+j] = mainMas[i+j] % 10; //mainMas[0] = 2, mainMas[1] = 1, mainMas[2] = 9 | mainMas[1] = 8,mainMas[2] = 0

        if(mainMas[i+j+1]){
          mainMas[i+j+1] = mainMas[i+j+1] + plus; // mainMas[2] = 9+2=11  
        } else if(plus !=0) {
          mainMas[i+j+1] = plus;  // mainMas[1] = 7, mainMas[2] = 3, mainMas[3] = 1
        }
    }
  }
  return mainMas.reverse().join('')

}

//multiplay(538,239)