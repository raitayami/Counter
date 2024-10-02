const counter = document.getElementById('number');

let num = Number(counter.innerHTML);


const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

increaseBtn.addEventListener('click', ()=>{
    num += 1;
    counter.innerHTML = num;
    colorChanger(num)

})

decreaseBtn.addEventListener('click', ()=>{
    num -= 1;
    counter.innerHTML = num;
    colorChanger(num)
})

resetBtn.addEventListener('click', ()=>{
    num -= num;
    counter.innerHTML = num;
    colorChanger(num)

})


const colorChanger = (num) => {
    if(num > 0){
        counter.style.color = 'lightgreen';
    } else if (num < 0){
        counter.style.color = 'salmon';
    } else {
        counter.style.color = 'white';
    }
}