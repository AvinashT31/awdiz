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

for(var i=147; i<=254; i++){
    if(i%3===0 && i%2!==0){
        console.log(i);
    }
}

var count=0
for(var i=147; i<=254; i++){
    if(i%3===0 && i%2!==0){
        count++;
    }
}
console.log(count);