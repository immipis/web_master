document.querySelector('#showBtn').addEventListener('click',function(){
  console.log('버튼이 클릭되었습니다')
  document.querySelector('#desc').style.display = "block";
})

document.querySelector('#cBtn').onclick = function(){
  document.querySelector('#desc').style.display = "none";
}

document.querySelector('img').addEventListener('mouseover' ,function(){
  document.querySelector('#desc').style.display = "block";
})

document.querySelector('img').addEventListener('mouseout' ,function(){
  document.querySelector('#desc').style.display = "none";
})
let img= ['멋진이미지.jpg','티라노.jpg','스피노.jpg','레드향.jpg']
let idx = 0
document.querySelector('#changeImg').onclick = function(){
  if(idx >= img.length)
    {
      idx=0;
    }
  document.querySelector('img').src = `image/${img[idx++]}` 
}
console.dir(document)

// document.onclick = function(){
//   document.location.href = 'https://www.daum.net'
// }