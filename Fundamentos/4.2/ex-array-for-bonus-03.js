let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberMultiplied = [];

for (let i = 1 ; i < numbers.length ; i++){
    for (let i2 = 0 ; i < numbers.length ; i2++){
        numberMultiplied.push(numbers[i] * numbers[i2]);
        i++;
    }
    if(i === numbers.length){
        numberMultiplied.push(numbers[i-1]*2);
    } 
}
console.log(numberMultiplied);
