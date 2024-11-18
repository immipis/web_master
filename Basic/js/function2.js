// var sum = 0;

//함수선언식
// function sum(param1, param2) {
//   return param1 + param2
// }

//함수표현식
// let sum = function (param1 = 39, param2 = 0) {
//   // if(!param1 || !param2){
//   //   return 0;
//   // }
//   return param1 + param2
// }

// console.log(sum(3, 6));

//화살표 함수
// let getMaxFunc = function (num1 = 0, num2 = 0) {
//   if (num1 >= num2) {
//     return num1;
//   }
//   else {
//     return num2;
//   }
// }
// let getMaxFunc = (num1 = 0, num2 = 0)/*function쓰기 싫어서 화살표 쓰는거임 위에함수랑 같음*/=> {
//   //   if (num1 >= num2) {
//   //     return num1;
//   //   }
//   //   else{
//   //     return num2;
//   //   }
//   // 
//   return result = num1 >= num2 ? num1 /* ?앞의 조건인 트루 */ : num2 /* ?앞의 조건인 펄스*/
// }

let getMaxFunc = (num1 = 0, num2 = 0) => num1 >= num2 ? num1 : num2; 
console.log(getMaxFunc(10,7))

let sumAry1=[10,50,60,40,80];
let sumAry = (num1) => {
  sum=0
  for(i=0;i<num1.length;i++){
    sum += num1[i]
  }
  console.log(sum)
}; 

sumAry(sumAry1);