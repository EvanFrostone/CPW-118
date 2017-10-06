var counter = 0;

function countUpByOne(){
    count+=1;
    document.getElementById('Counter').innerText = counter;
    alert(counter);
}



document.getElementById('CountButton').addEventListener(click, countUpByOne);