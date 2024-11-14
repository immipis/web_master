
// document.querySelector('#add').addEventListener('click',function(e){
//   console.log(e.target)
//   document.querySelector('#result').value = parseInt(document.querySelector('#num1').value) + parseInt(document.querySelector('#num2').value)
// })

// let addFnc = ()=>{
//   let v1 = document.getElementById("num1").value;
//   let v2 = document.querySelector("#num2").value;
//   let result = parseInt(v1) + parseInt(v2);
//   document.querySelector("#result").value = result;
// }
// document.querySelector('button:nth-of-type(1)').addEventListener('click',addFnc)


// let addFn2c = ()=>{
//   document.querySelector('#result').value = parseInt(document.querySelector('#num1').value) - parseInt(document.querySelector('#num2').value)
// }
// document.querySelector('#sub').addEventListener('click',addFn2c)


// document.querySelector('#multy').addEventListener('click',function(){
//   document.querySelector('#result').value = parseInt(document.querySelector('#num1').value) * parseInt(document.querySelector('#num2').value)
// })
// document.querySelector('#divid').addEventListener('click',function(){
//   document.querySelector('#result').value = parseInt(document.querySelector('#num1').value) / parseInt(document.querySelector('#num2').value)
// })
let smmd = (e) => {
  console.log(e)
  let v1 = document.getElementById("num1").value;
  let v2 = document.querySelector("#num2").value;
  if(!v1|| !v2){
    alert('값을 입력 하세요')
    return;
  }
  let result;
  if (e.target.id == 'add') {
    result = parseInt(v1) + parseInt(v2);
  }
  else if (e.target.id == 'sub') {
    result = parseInt(v1) - parseInt(v2);
  }
  else if (e.target.id == 'multy') {
    result = parseInt(v1) * parseInt(v2);
  }
  else if (e.target.id == 'divid') {
    result = parseInt(v1) / parseInt(v2);
  }
  document.querySelector("#result").value = result;
}

document.querySelector('#add').addEventListener('click', smmd)
document.querySelector('#sub').addEventListener('click', smmd)
document.querySelector('#multy').addEventListener('click', smmd)
document.querySelector('#divid').addEventListener('click', smmd)