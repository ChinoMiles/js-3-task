
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
