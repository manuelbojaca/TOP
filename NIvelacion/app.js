/*var div = document.querySelector('div.container');
var uno = document.createElement('p');
var dos = document.createElement('p');
var tres = document.createElement('p');
uno.innerHTML = 'uno';
dos.innerHTML = 'dos';
tres.innerHTML = 'tres';*/
console.time('loop');

//var container = document.querySelector('.container');

//var nums;

document.querySelector('p').innerHTML = '';

for (let i = 3;i < 7;i++){
    var nums = document.createElement('div');
    nums.innerHTML = i;
    nums.classList.add('item');
    document.querySelector('.container').appendChild(nums);
}

const items = document.querySelectorAll(".item");
items.forEach(e => e.classList.add("error"));

console.timeEnd('loop');


