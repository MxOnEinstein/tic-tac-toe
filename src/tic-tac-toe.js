let a1 = document.querySelector('#a1');
let a2 = document.querySelector('#a2');
let a3 = document.querySelector('#a3');
let a4 = document.querySelector('#a4');
let a5 = document.querySelector('#a5');
let a6 = document.querySelector('#a6');
let a7 = document.querySelector('#a7');
let a8 = document.querySelector('#a8');
let a9 = document.querySelector('#a9');

let x1 = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;
let x5 = 0;
let x6 = 0;
let x7 = 0;
let x8 = 0;
let x9 = 0;

let o1 = 0;
let o2 = 0;
let o3 = 0;
let o4 = 0;
let o5 = 0;
let o6 = 0;
let o7 = 0;
let o8 = 0;
let o9 = 0;

let area = document.querySelector('#area');
let winner = document.querySelector('#win');
let res = document.querySelector('#res');

a1.addEventListener('click',event => {
	setTimeout(`a1.innerHTML = "X"`, 300);
  x1 = 1;
  document.getElementsByClassName('val1')[0].style.color = "magenta";
  document.getElementsByClassName('val1')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val1')[0].style.transform = "perspective(600px) rotateY(-180deg)";
  a1.style.pointerEvents='none';
  check();
});

a1.addEventListener('contextmenu',event => {
	setTimeout(`a1.innerHTML = "O"`, 300);
	o1 = 1;
  document.getElementsByClassName('val1')[0].style.color = "aqua";
  document.getElementsByClassName('val1')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val1')[0].style.transform = "perspective(600px) rotateY(180deg)";
  a1.style.pointerEvents='none';
  check();
});

a2.addEventListener('click',event => {
	setTimeout(`a2.innerHTML = "X"`, 300);
  x2 = 1;
  document.getElementsByClassName('val2')[0].style.color = "magenta";
  document.getElementsByClassName('val2')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val2')[0].style.transform = "perspective(600px) rotateY(-180deg)";
  a2.style.pointerEvents='none';
  check();
});

a2.addEventListener('contextmenu',event => {
	setTimeout(`a2.innerHTML = "O"`, 300);
	o2 = 1;
  document.getElementsByClassName('val2')[0].style.color = "aqua";
  document.getElementsByClassName('val2')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val2')[0].style.transform = "perspective(600px) rotateY(180deg)";
  a2.style.pointerEvents='none';
  check();
});

a3.addEventListener('click',event => {
	setTimeout(`a3.innerHTML = "X"`, 300);
  x3 = 1;
  document.getElementsByClassName('val3')[0].style.color = "magenta";
  document.getElementsByClassName('val3')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val3')[0].style.transform = "perspective(600px) rotateY(-180deg)";
  a3.style.pointerEvents='none';
  check();
});

a3.addEventListener('contextmenu',event => {
	setTimeout(`a3.innerHTML = "O"`, 300);
	o3 = 1;
  a3.style.pointerEvents='none';
  document.getElementsByClassName('val3')[0].style.color = "aqua";
  document.getElementsByClassName('val3')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val3')[0].style.transform = "perspective(600px) rotateY(180deg)";
  check();
});

a4.addEventListener('click',event => {
	setTimeout(`a4.innerHTML = "X"`, 300);
  x4 = 1;
  document.getElementsByClassName('val4')[0].style.color = "magenta";
  document.getElementsByClassName('val4')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val4')[0].style.transform = "perspective(600px) rotateY(-180deg)";
  a4.style.pointerEvents='none';
  check();
});

a4.addEventListener('contextmenu',event => {
	setTimeout(`a4.innerHTML = "O"`, 300);
	o4 = 1;
  document.getElementsByClassName('val4')[0].style.color = "aqua";
  document.getElementsByClassName('val4')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val4')[0].style.transform = "perspective(600px) rotateY(180deg)";
  a4.style.pointerEvents='none';
  check();
});

a5.addEventListener('click',event => {
	setTimeout(`a5.innerHTML = "X"`, 300);
  x5 = 1;
  document.getElementsByClassName('val5')[0].style.color = "magenta";
  document.getElementsByClassName('val5')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val5')[0].style.transform = "perspective(600px) rotateY(-180deg)";
  a5.style.pointerEvents='none';
  check();
});

a5.addEventListener('contextmenu',event => {
	setTimeout(`a5.innerHTML = "O"`, 300);
	o5 = 1;
  document.getElementsByClassName('val5')[0].style.color = "aqua";
  document.getElementsByClassName('val5')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val5')[0].style.transform = "perspective(600px) rotateY(180deg)";
  a5.style.pointerEvents='none';
  check();
});

a6.addEventListener('click',event => {
	setTimeout(`a6.innerHTML = "X"`, 300);
  x6 = 1;
  document.getElementsByClassName('val6')[0].style.color = "magenta";
  document.getElementsByClassName('val6')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val6')[0].style.transform = "perspective(600px) rotateY(-180deg)";
  a6.style.pointerEvents='none';
  check();
});

a6.addEventListener('contextmenu',event => {
	setTimeout(`a6.innerHTML = "O"`, 300);
	o6 = 1;
  document.getElementsByClassName('val6')[0].style.color = "aqua";
  document.getElementsByClassName('val6')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val6')[0].style.transform = "perspective(600px) rotateY(180deg)";
  a6.style.pointerEvents='none';
  check();
});

a7.addEventListener('click',event => {
	setTimeout(`a7.innerHTML = "X"`, 300);
  x7 = 1;
  document.getElementsByClassName('val7')[0].style.color = "magenta";
  document.getElementsByClassName('val7')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val7')[0].style.transform = "perspective(600px) rotateY(-180deg)";
  a7.style.pointerEvents='none';
  check();
});

a7.addEventListener('contextmenu',event => {
	setTimeout(`a7.innerHTML = "O"`, 300);
	o7 = 1;
  document.getElementsByClassName('val7')[0].style.color = "aqua";
  document.getElementsByClassName('val7')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val7')[0].style.transform = "perspective(600px) rotateY(180deg)";
  a7.style.pointerEvents='none';
  check();
});

a8.addEventListener('click',event => {
	setTimeout(`a8.innerHTML = "X"`, 300);
  x8 = 1;
  document.getElementsByClassName('val8')[0].style.color = "magenta";
  document.getElementsByClassName('val8')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val8')[0].style.transform = "perspective(600px) rotateY(-180deg)";
  a8.style.pointerEvents='none';
  check();
});

a8.addEventListener('contextmenu',event => {
	setTimeout(`a8.innerHTML = "O"`, 300);
	o8 = 1;
  document.getElementsByClassName('val8')[0].style.color = "aqua";
  document.getElementsByClassName('val8')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val8')[0].style.transform = "perspective(600px) rotateY(180deg)";
  a8.style.pointerEvents='none';
  check();
});

a9.addEventListener('click',event => {
	setTimeout(`a9.innerHTML = "X"`, 300);
  x9 = 1;
  document.getElementsByClassName('val9')[0].style.color = "magenta";
  document.getElementsByClassName('val9')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val9')[0].style.transform = "perspective(600px) rotateY(-180deg)";
  a9.style.pointerEvents='none';
  check();
});

a9.addEventListener('contextmenu',event => {
	setTimeout(`a9.innerHTML = "O"`, 300);
	o9 = 1;
  document.getElementsByClassName('val9')[0].style.color = "aqua";
  document.getElementsByClassName('val9')[0].style.transition = "transform .6s linear";
  document.getElementsByClassName('val9')[0].style.transform = "perspective(600px) rotateY(180deg)";
  a9.style.pointerEvents='none';
  check();
});

res.addEventListener('click',event => {
	location.reload();
});


function check() {//---------------------------------- for X
	if(x1 == 1 && x2 == 1 && x3 == 1){//w1
  	setTimeout(`document.getElementsByClassName('line1x')[0].style.visibility = "visible"`, 500);
    setTimeout(`document.getElementsByClassName('line1x')[0].style.width = "300px"`, 400);
  	area.style.pointerEvents='none';
		winner.innerHTML = "Player X win!";
	}else if(x4 == 1 && x5 == 1 && x6 == 1){//w2
  setTimeout(`document.getElementsByClassName('line2x')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('line2x')[0].style.width = "300px"`, 400);
  	area.style.pointerEvents='none';
  	winner.innerHTML = "Player X win!";
  }else if(x7 == 1 && x8 == 1 && x9 == 1){//w3
  setTimeout(`document.getElementsByClassName('line3x')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('line3x')[0].style.width = "300px"`, 400);
  	area.style.pointerEvents='none';
  	winner.innerHTML = "Player X win!";
  }else if(x1 == 1 && x4 == 1 && x7 == 1){//h1
  setTimeout(`document.getElementsByClassName('wline1x')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('wline1x')[0].style.height = "300px"`, 400);
  	area.style.pointerEvents='none';
  	winner.innerHTML = "Player X win!";
  }else if(x2 == 1 && x5 == 1 && x8 == 1){//h2
  setTimeout(`document.getElementsByClassName('wline2x')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('wline2x')[0].style.height = "300px"`, 400);
  	area.style.pointerEvents='none';
  	winner.innerHTML = "Player X win!";
  }else if(x3 == 1 && x6 == 1 && x9 == 1){//h3
  setTimeout(`document.getElementsByClassName('wline3x')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('wline3x')[0].style.height = "300px"`, 400);
  	area.style.pointerEvents='none';
  	winner.innerHTML = "Player X win!";
  }else if(x1 == 1 && x5 == 1 && x9 == 1){//d1
  setTimeout(`document.getElementsByClassName('zline1x')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('zline1x')[0].style.height = "420px"`, 400);
  	area.style.pointerEvents='none';
  	winner.innerHTML = "Player X win!";
  }else if(x3 == 1 && x5 == 1 && x7 == 1){//d2
  setTimeout(`document.getElementsByClassName('zline2x')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('zline2x')[0].style.height = "420px"`, 400);
  	area.style.pointerEvents='none';
  	winner.innerHTML = "Player X win!";//------------ for O
  }else if(o1 == 1 && o2 == 1 && o3 == 1){//w1
  setTimeout(`document.getElementsByClassName('line1o')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('line1o')[0].style.width = "300px"`, 400);
  	area.style.pointerEvents='none';
		winner.innerHTML = "Player O win!";
	}else if(o4 == 1 && o5 == 1 && o6 == 1){//w2
  setTimeout(`document.getElementsByClassName('line2o')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('line2o')[0].style.width = "300px"`, 400);
  	area.style.pointerEvents='none';
  	winner.innerHTML = "Player O win!";
  }else if(o7 == 1 && o8 == 1 && o9 == 1){//w3
  setTimeout(`document.getElementsByClassName('line3o')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('line3o')[0].style.width = "300px"`, 400);
  	area.style.pointerEvents='none';
  	winner.innerHTML = "Player O win!";
  }else if(o1 == 1 && o4 == 1 && o7 == 1){//h1
  setTimeout(`document.getElementsByClassName('wline1o')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('wline1o')[0].style.height = "300px"`, 400);
  	area.style.pointerEvents='none';
  	winner.innerHTML = "Player O win!";
  }else if(o2 == 1 && o5 == 1 && o8 == 1){//h2
  setTimeout(`document.getElementsByClassName('wline2o')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('wline2o')[0].style.height = "300px"`, 400);
  	area.style.pointerEvents='none';
  	winner.innerHTML = "Player O win!";
  }else if(o3 == 1 && o6 == 1 && o9 == 1){//h3
  setTimeout(`document.getElementsByClassName('wline3o')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('wline3o')[0].style.height = "300px"`, 400);
  	area.style.pointerEvents='none';
  	winner.innerHTML = "Player O win!";
  }else if(o1 == 1 && o5 == 1 && o9 == 1){//d1
  setTimeout(`document.getElementsByClassName('zline1o')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('zline1o')[0].style.height = "420px"`, 400);
  	area.style.pointerEvents='none';
  	winner.innerHTML = "Player O win!";
  }else if(o3 == 1 && o5 == 1 && o7 == 1){//d2
  setTimeout(`document.getElementsByClassName('zline2o')[0].style.visibility = "visible"`, 500);
  setTimeout(`document.getElementsByClassName('zline2o')[0].style.height = "420px"`, 400);
  	area.style.pointerEvents='none';
  	winner.innerHTML = "Player O win!";
  }else if(zero == 9){
  	area.style.pointerEvents='none';
  	winner.innerHTML = "A DRAW!";
  }
}

