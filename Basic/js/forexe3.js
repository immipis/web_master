let sum = 0;
let max = 0;
let min = 0;

for (let i = 1; i<=5;i++){
  let score = Number(prompt(`${i}번째 점수는?`))
  if (score>max){
    max = score
  }
  if(score < min || min <= 0) 
  {
    min = score
  }
  sum += score;
}

let avg = sum /5
console.log(`합 ${sum} 평균 ${avg} 최고점수 ${max} 최저점수 ${min}`)