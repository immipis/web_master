
let f1 = {name:'홍길동',age:20};
let f2 = {name:'김길동',age:21};
let f3 = {name:'박길동',age:22};
let f4 = {name:'최길동',age:23};

let myFrends =[f1,f2,f3,f4]
friendListFnc() //함수호충

// 함수 정의 실행하기 위해서는 호출이 필요함
function friendListFnc(){
  let newName = document.querySelector('#name').value
  let newAge = document.querySelector('#age').value
  if (newName && newAge/* == newName != '' && newAge != ''*/){
    myFrends.push({name:newName, age:newAge});
  }
  let html = '';
  html += '<table border="2"><thead><tr><th>이름</th><th>나이</th></tr></thead><tbody>'
  for(let i =0; i<myFrends.length; i++){
    html+=`<tr><td>${myFrends[i]['name']}</td><td>${myFrends[i].age}</td></tr>`;
  }
  html += '</tbody></table>';
  document.querySelector('#show').innerHTML = html

}
