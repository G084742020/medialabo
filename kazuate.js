let kotae = Math.floor(Math.random()*10) + 1;

let kaisu = 4;

for(let i=0; i<kaisu; i++) {
  let kaisu = document.querySelector('span#kaisu');
  kaisu.textContent = i+1;
  hantei();
}

function hantei() {
  let yoso = 4;
  let answer = document.querySelector('span#answer');
  answer.textContent = yoso;
  
  let result = document.querySelector('p#result');
  if(kotae == yoso) {
    result.textContent = '正解です．おめでとう！';
  } else if(kotae > yoso) {
    result.textContent = '間違いです．答えはもっと大きいですよ．';
  } else if(kotae < yoso) {
    result.textContent = '間違いです．答えはもっと小さいですよ．';
  }
}