// //function1.js

// let numAry1=[50,60,40,70,20];
// let numAry2=[55,63,42,79,27];
// let max = 0;

// console.log(`sumAry(numAry1)의 합계 ${sumAry(numAry1)}`)
// console.log(`sumAry(numAry2)의 합계 ${sumAry(numAry2)}`)
// console.log(`두개 더한값 ${sum(sumAry(numAry1),sumAry(numAry2))}`)

// console.log(sumAry([90,80,40,20,60]))

// function sumAry(param1){
//   let sum=0;
//   for(let i=0;i<param1.length;i++)
//   {
//     sum+=param1[i]
//   }
//   return sum;
// }

// function sum(param1,param2){
//   let result = param1 + param2
//   return result;
// }

// // 배열을 매개값으로 받아서 요소중에서 제일큰값을 구하는.

// function getMaxValue(param1){
//   for(let i=0;i<param1.length;i++)
//     {
//       if(max<param1[i]){
//         max=param1[i]
//       }
//     }
//     return max
// }

// console.log(getMaxValue(numAry2))

makeNumberFnc()

function makeNumberFnc() {
  let a = 0
  let b = []
  let sum = 0

  for (i = 0; i < 5; i++) {
    console.log(`현재 i는 ${i} 입니다 i < 5 라면 멈춤`)
    a = Math.random() * 10 + 11
    console.log(`랜덤하게 받아온수 ${parseInt(a)}를 리스트에 넣겠습니다`)
    b.push(parseInt(a))
    console.log('리스트 안에 있는 숫자들 '+b)
    console.log(`리스트 ${i}번째 있는 숫자 `+b[i])
    console.log(`현재 sum 은 ${sum} 이고 리스트 ${i}번째 있는 숫자${b[i]}를 sum에다가 더해주겠습니다`)
    sum = sum + b[i]
    console.log(`더한결과 sum 은 ${sum} 이고 for문이 종료 되었습니다 i++을 진행하여 i를 1증가 시키겟습니다 `)
  }
  console.log(`나온수 5개 ${b}, 합 => ${sum}`)
};