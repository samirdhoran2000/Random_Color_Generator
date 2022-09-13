// const btn = document.getElementById("myBtn");

// btn.style.backgroundColor = 'lightgreen';
// btn.style.borderStyle = 'none';
// btn.style.blockSize = '29px';
// btn.style.cursor = 'pointer';
// btn.innerHTML = 'third wave';

// const bt = document.body.children;
// console.log(bt[0]);

// let c = prompt('Enter your age');
// let z = document.getElementById('sam');
// let v = document.getElementById('myBtn');

function myfun() {
  let c = prompt("Enter your age");
  let z = document.getElementById("sam");
  let v = document.getElementById("myBtn");
  sam.innerHTML = c;
}

function bsdk() {
  let rand1 = Math.round(Math.random() * 256);
  let rand2 = Math.floor(Math.random() * 256);
  let rand3 = Math.floor(Math.random() * 256);

  console.log(`${rand1} ${rand2} ${rand3}`);
    document.body.style.backgroundColor = `rgb(${rand1}, ${rand2}, ${rand3})`;
    document.getElementById("rgbid").innerHTML = `${rand1}, ${rand2}, ${rand3}`;
}


  setInterval(bsdk, 2000);