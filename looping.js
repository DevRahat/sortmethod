const friends=['Elon','Bill','Mark','Warent'];

for(const fn of friends){
    console.log(fn);
}

for(let i=0;i<friends.length;i++){
    console.log(i);
    console.log(friends[i]);
}

const numbers=[12,23,34,45,56,67];

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
let i=0;
while(i<numbers.length){
    console.log(numbers[i]);
    i++;
}