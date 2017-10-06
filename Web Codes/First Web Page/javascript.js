var counter = 0

function addOne(){
    counter+=1;
    document.getElementById('Counter').innerText = counter;
}



document.getElementById('Addition').addEventListener('click', addOne);