const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']; 

const compareAnswers = (rightAnswers, studentAnswers) => {
  if(studentAnswers === rightAnswers) {
    return 1;
  }
  else if (studentAnswers === 'N.A') {
    return 0;
  }
  else {
    return -0.5;
  }
}

const sumPoints = (rightAnswers, studentAnswers, callback) => {
  let points = 0;
  for (let i = 0; i < rightAnswers.length; i += 1){
    const check = callback(rightAnswers[i], studentAnswers[i]);
    points += check;
  }
  return `A nota é: ${points}`
}

console.log(sumPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));