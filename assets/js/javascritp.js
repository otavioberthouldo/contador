var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

document.getElementById("adicionar").addEventListener("click", increment);
document.getElementById("subtrair").addEventListener("click", decerement);

function increment(){
    if (currentNumber < 0 || currentNumber < 10)
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber >= 0 ){
        currentNumberWrapper.innerHTML = currentNumber;
        currentNumberWrapper.style.color = 'blue';
    }
}

function decerement(){
    if (currentNumber <= 10 || currentNumber === 0) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    if (currentNumber < 0 ){
        currentNumberWrapper.innerHTML = currentNumber;
        currentNumberWrapper.style.color = 'red';
    }
}