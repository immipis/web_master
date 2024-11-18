let sum2 = 0
let sum3 = 0
for (let i = 1; i<=10; i++){
  if(i%2==0){
    sum2 += i
  }
  if(i%3==0){
    sum3 += i
  }
}
console.log(`2의 배수의 합  ${sum2}, 3의 배수의 합  ${sum3}`);
