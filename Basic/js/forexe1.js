//for exe1
// let num = Number(prompt('단'))
// 
document.write('<table border="2">')
for (let i = 2; i <= 9; i++){
  for (let j = 1; j<=9; j++)
  {
    if (j%3==1){
      document.write(`<tr style="background: pink; color : blue"><td>${i} * ${j}</td><td> = </td><td>${j*i}</td></tr>`);
    }
    else if(j%3==2){
      document.write(`<tr style="background: red; color : pink"><td>${i} * ${j}</td><td> = </td><td>${j*i}</td></tr>`);
    }
    else{
      document.write(`<tr style="background: blue; color : red"><td>${i} * ${j}</td><td> = </td><td>${j*i}</td></tr>`);
    }
    
  }

}
document.write('</table>')


