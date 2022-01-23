const colors = require('colors');

let arrOfArg = process.argv.slice(2)
let a = arrOfArg[0]
let b = arrOfArg[1]
let primeNum = []

if ( a > 2 & b > 2){
    for (let i = a; i <= b; i++) { 
        let isPrime = 1;
        for (let j = 2; (j <= i/2)&&(isPrime == 1); j++) { 
            if (i % j === 0) { 
                isPrime = 0;     
            } 
        }
        if(isPrime == 1){
                primeNum.push(i)
           }
        } 
    }  else {
    console.log('введите допустимые значения');
}

let red = colors.red
let green = colors.green
let yellow = colors.yellow

primeNum.forEach((item , i )=>{
    if(i % 3 === 0){
      console.log(green(item));
    }
    else if((i + 1) % 3 === 0){
        console.log(red(item));
    }
    else {
        console.log(yellow(item));
    }
})
