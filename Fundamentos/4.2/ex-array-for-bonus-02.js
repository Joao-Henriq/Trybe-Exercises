let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1 ; i < numbers.length ; i++){
    for (let i2 = 0 ; i2 < numbers.length ; i2++){
        if(numbers[i] > numbers[i2]){
            let position = numbers[i];
            numbers[i] = numbers[i2];
            numbers[i2] = position;
        }
    }
}
console.log(numbers)