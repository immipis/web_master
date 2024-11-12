
let score = []
let sum =0;
let max =0;
let min =0;
let avg =0;

for(let i = 0;i < 5;i++){
  let tests = parseInt(prompt(`${i+1}번 학생 점수 입력`))
  score.push(tests)
  sum += score[i]
  if (score[i] > max){
    max = score[i]
  }
  if(min==0){
    min = score[i]
  }
  else if(min>score[i]){
    min = score[i]
  }
}
avg = sum/score.length
console.log(`평균 => ${avg} 최고 => ${max} 최저 => ${min} `)
