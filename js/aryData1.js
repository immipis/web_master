//어레에이데이타아우어언

document.querySelector('#inpV').remove();
document.querySelector('#addBtn').remove();
document.querySelector('span').remove();

let sum = 0;

let numAry = [23,45,34,78,51,98];
for (let i=0;i < numAry.length; i++){
  // console.log(`${i} 위치=> ${numAry[i]}`);
  // if(numAry[i] > 50){
  //   console.log(`50 보다 큰값=> ${numAry[i]}`);
  //   sum += numAry[i];
  // }
  if(numAry[i] % 2 == 0){
    console.log(`짝수=> ${numAry[i]}`);
    sum += numAry[i];
  }
}
console.log(sum)