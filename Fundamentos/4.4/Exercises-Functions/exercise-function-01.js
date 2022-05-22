function checkPalindrome(text) {     
    let textReverse = text.split("").reverse().join("");
    return textReverse === text;
}
console.log(checkPalindrome('revivera'));
