function x(num1,num2){
  re = (num1+=5) * (num2+=3);
  return `<b>${re}</b>`;
}

document.querySelector('#result').innerHTML=`<li style="color:red">${x(9,9)}</li>`
document.querySelector('#value').innerHTML=`<li style="color:blue">${x(10,5)}</li>`