const mainTitle = document.querySelector('#title');
let curValue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnDecrement.addEventListener('click', () =>{
       curValue--;
       mainTitle.textContent = curValue;
});
btnReset.addEventListener('click', () =>{
    curValue = 0;
    mainTitle.textContent = curValue;
});
btnIncrement.addEventListener('click', () =>{
    curValue++;
    mainTitle.textContent = curValue;
});

