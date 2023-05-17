let kotae = Math.floor(Math.random()*10) + 1;
let kaisu = 4;

for(let i=0; i<kaisu; i++) {
  let p1 = document.querySelector('span#kaisu');
  p1.textContent = i+1;
  hantei();
}

function hantei() {
  let yoso = 4;
  let p2 = document.querySelector('span#answer');
  p2.textContent = yoso;
  
  let p3 = document.querySelector('p#result');
  if(kotae == yoso) {
    p3.textContent = '正解です．おめでとう！';
  } else if(kotae > yoso) {
    p3.textContent = '間違いです．答えはもっと大きいですよ．';
  } else if(kotae < yoso) {
    p3.textContent = '間違いです．答えはもっと小さいですよ．';
  }
}