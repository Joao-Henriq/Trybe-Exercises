const n1 = 4;
const n2 = 5;
const n3 = 6;

if ( n1 > (n2 && n3)) console.log('O maior número é:', n1);
else if ( n2 > (n1 && n3) ) console.log('O maior número é:', n2);
else console.log('O maior número é:', n3);