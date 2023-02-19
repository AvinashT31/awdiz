// Q.find count of number 45 from given array.

// [12,13,45,67,43,76,89,54,23,7,8797,243,23234]

// var count = 0;
// var array = [12,13,45,67,45,76,89,54,23,7,8797,243,23234]
// for(var i=0; i<14; i++){
//     if(array[i]===45){
//         count++;
//     }
// }
// console.log(count);

// Q.8 find numbers which addition is target
  
// var nums = [11,15,5,4];
// var target = 9;

// for(var i=0; i<nums.length -1; i++){
//      for (var j=i+1; j <nums.length; j++){
//         if(nums[i] + nums[j]===target){
//             console.log(nums[i], nums[j]);
//         }
//     }
// }

// Q. 9 Find addition of every second number from 57689 - 346578
// var add=0;
// for(var i=57689 + 1; i < 346578; i+=2){
 //     if(i%2===0){
//          add = add + i;
//     }
// }
// console.log(add);


// Q.10 find 3 numbers which addtion is target.

var num = [2,4,6,8,9,10,13,78,12,34,23]
var target = 35;
var count = 0;

// for(var i=0; i < num.length; i++){
//     for(var j=i+1; j < num.length; j++){
//         for(var k=i+j+1; k < num.length; k++){
//             if (num[i] + num [j] + num[k]===target){
//                 console.log(num[i], num[j], num[k])
//             }
//         }
//     }
// }
 
for(var i=0; i < num.length -1; i++){
    for(var j=i+1; j < num.length; j++){
        for(var k=j+1; k < num.length; k++){
            if (num[i] + num [j] + num[k]===target){
                // console.log(num[i], num[j], num[k])
            }
        }count++;
    }
    // console.log("count");
}

console.log(count);


// for(var i=0; i < num.length; i++){
//     for(var j=i; j < num.length; j++){
//         for(var k=j; k < num.length; k++){
//             if (num[i] + num [j] + num[k]===target){
//                 console.log(num[i], num[j], num[k])
//             }
//         }
//     }
// }
 