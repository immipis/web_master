let sum = 0;
sum = sum + 1;
sum = sum + 2;
sum = sum + 3;
sum = sum + 4;
sum = sum + 5;

console.log('1~5 까지의 합:' + sum);
sum = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    sum = sum + i;
    console.log('sum = ' + sum + ' i =' + i);
  }
  // if(i==7){
  //   break;
  // }
}
