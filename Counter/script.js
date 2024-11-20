let numberCount = 0;

function increaseNumber(){
    if (numberCount > -1 ) {
        numberCount++;
        document.querySelector('.number').textContent = numberCount;
    }
}

function decreaseNumber(){
    if (numberCount > 0){
        numberCount--;
        document.querySelector('.number').textContent = numberCount;
    }
}
function resetNumber()
{
    numberCount = 0;
    document.querySelector('.number').textContent = numberCount;
}