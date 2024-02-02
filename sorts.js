// const nam=['Sakib','Tamim','Musfiq','Ryead'];

// console.log(nam.sort());

const num=[2,4,7,78,43,56];
console.log(num.sort(function(a,b){
    return(a-b);
}));

console.log(num.sort(function(a,b){
    return (b-a);
}))