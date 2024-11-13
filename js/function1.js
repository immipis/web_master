//function1.js

let numAry1=[50,60,40,70,20];
let numAry2=[55,63,42,79,27];

console.log(`sumAry(numAry1)의 합계 ${sumAry(numAry1)}`)
console.log(`sumAry(numAry2)의 합계 ${sumAry(numAry2)}`)
console.log(`두개 더한값 ${sum(sumAry(numAry1),sumAry(numAry2))}`)

console.log(sumAry([90,80,40,20,60]))

function sumAry(param1){
  let sum=0;
  for(let i=0;i<param1.length;i++)
  {
    sum+=param1[i]
  }
  return sum;
}

function sum(param1,param2){
  let result = param1 + param2
  return result;
}
