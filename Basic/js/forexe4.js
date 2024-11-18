//forexe4.js

let fnames=[];

function addFriendFnc(){
  
  let fname = document.querySelector('#inpV').value;
  fnames.push(`<p>${fname}</p>`)
  console.log('친구이름:',fname)
  // document.querySelector('#show').innerHTML += `<p>${fname}</p>`
  // document.querySelector('#show').innerHTML='<p>1123</p> <p>112412</p> <p>125125</p>'
  console.log(fnames)
  str =''
  for(let i= 0; i < fnames.length; i++)
  {
    str += fnames[i];
  }
  document.querySelector('#show').innerHTML = str
}