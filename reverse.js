// const numbers=[1,2,3,4,5,6];

// for(let i=numbers.length;i>=0;i--){
//     console.log(numbers[i]);
// }

// //We can use Reverse Function for reverse an array 

// const reverse=numbers.reverse();

// console.log(reverse);

const numbers=[1,2,3,4,5,6];

const re_numbers=[];

for(const num of numbers){
    // console.log(num);
    re_numbers.unshift(num);
    
}
console.log(re_numbers);