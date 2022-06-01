function whatNumberMoreRepeat(array, result, repeat){
    array = [2, 3, 2, 5, 8, 2, 3];
    repeat = array.slice().sort();
    result = [];
    for (let i =0; i < repeat.length -1; i++){
        if(repeat[i+1] === repeat[i]) result.push(repeat[i]);
    }
    
    return result;
}
console.log(whatNumberMoreRepeat());