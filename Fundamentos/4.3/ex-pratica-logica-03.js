let array = ['java', 'javascript', 'python', 'html', 'css'];
let higherOfList = '';
let smallestOfList = array[0];
for(let i=0; i< array.length;i++){
    
    if ( array[i].length > higherOfList.length){
        higherOfList = array[i];
    } 
    if (array[i].length < smallestOfList.length){
        smallestOfList = array[i];
    }
}
console.log(higherOfList);
console.log(smallestOfList);