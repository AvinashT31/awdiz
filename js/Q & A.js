// Q.4 print the numbers from 20 to 40, which is even.

// for(var i=20; i<=40; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// Q.4 print the numbers from 20 to 40, which is even and also gives the count.

// var count=0;
// for(var i=20; i<=40; i++){
//     if(i%2===0){
//         count++;
//     }
// }
// console.log(count);


// Q.print count number from 147 to 254, ehich is divisible by 3 and odd

// for(var i=147; i<=254; i++){
//     if(i%3===0 && i%2!==0){
//         console.log(i);
//     }
// }

// var count=0
// for(var i=147; i<=254; i++){
//     if(i%3===0 && i%2!==0){
//         count++;
//     }
// }
// console.log(count);


// Q.10 find given number is present in given array or not, if found return true else false

var array = [1,2,443,454,232,546,23,567,676,2342,565,4,2,6]
var number = 6;

// Number1 = array.includes(number);
// console.log(Number1, "Number1");

// if(array.includes(number)){
//     console.log(true);
// }else{
//     console.log(false);
// }


var falg = false;


for (var i = 0; i < array.length; i++) {
    if (array [i] == number){
        // console.log(number, "number")
        falg = true;
    }
}

if (falg) {
    console.log("true")
} else {
    console.log("false");
}