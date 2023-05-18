let kotae = Math.floor(Math.random()*10) + 1;
let kaisu = 4;

for(let i=0; i<kaisu; i++) {
  let span_kaisu = document.querySelector('span#kaisu');
  span_kaisu.textContent = i+1;
  hantei();
}

function hantei() {
  let yoso = 4;
  let span_answer = document.querySelector('span#answer');
  span_answer.textContent = yoso;
  
  let p_result = document.querySelector('p#result');
  if(kotae == yoso) {
    p_result.textContent = '正解です．おめでとう！';
  } else if(kotae > yoso) {
    p_result.textContent = '間違いです．答えはもっと大きいですよ．';
  } else if(kotae < yoso) {
    p_result.textContent = '間違いです．答えはもっと小さいですよ．';
  }
}