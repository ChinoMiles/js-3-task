/*function multiply (num1, num2) {
    let result = num1 * num2;
    console.log(result);
}
multiply(0.5, 3);
multiply(5, 5);
multiply(6, 6) */

//ARRAYS
/*const myArray = ['James', 24, true, 'ChinoMiles'];
myArray.push('Baba Agbas');
myArray.unshift('Ichie');
console.log(Array.isArray(myArray));
console.log(myArray.indexOf('Ichie'))
console.log(myArray);*/

//Objects Literals
/*
const chinomiles = {
    firstName: 'James',
    lastName: 'Chinedu',
    age: 23,
    courses: ['html', 'css', 'javascript', 10.10],
    address: {
        street: 'jahi street', 
        house: 'H4',
        zone: 'B'
    }
}

chinomiles.email = 'anazobajames@gmail.com';

console.log(chinomiles);*/

// const data = [
//     {
//         principal: 2500,
//         time: 1.8
//     },
//     {
//         principal: 1000,
//         time: 5
//     },
//     {
//         principal: 3000,
//         time: 1
//     }
// ]

// console.log (data[2].principal)
// const para = 20;
// for (let i=1; para<=20; i++) {
//     if (para % 2)
// }
// let para = 50;
// for (i = 1; i <= para; i++) {
//     if (i%2 ==0) {
//         console.log("yu")
//     } else if (i%3 ==0) {
//         console.log("gi")
//     } else if (i%5 ==0) {
//         console.log("o")
//     } else if (i%2 && i%3 && i%5 !==0) {
//         console.log(i)
//     }
// }

// //Function to check devisibility
function checkDivisible(param) {
    let array = [];
    //Loop function
    for(i = 1; i <= param; i++) {
        //Divisible by 2 & 3 & 5
        if(i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
            array.push("yu-gi-oh");
        }
        //Divisible by 3 & 5
        else if(i % 3 == 0 && i % 5) {
            array.push("gi-oh");
        }
        //Divisible by 2 & 5
        else if(i % 2 == 0 && i % 5 == 0) {
            array.push("yu-oh");
        }
        //Divisible by 2 & 3
        else if(i % 2 == 0 && i % 3 == 0) {
            array.push("yu-gi");
        }
        //Divisble by 5
        else if(i % 5 == 0) {
            array.push("oh");
        }
        //Divisible by 3
        else if(i % 3 == 0) {
            array.push("gi");
        }
        //Divisible by 2
        else if(i % 2 == 0) {
            array.push("yu")
        }
        else{
            array.push(i)
        }

    }
    return array
    param = 100;
    console.log(array)

}

console.log()