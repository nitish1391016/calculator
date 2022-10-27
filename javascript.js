var screen=document.getElementById('screen');

function btnClick(value){
    screen.value+=value;
}

function result(){
    screen.value=eval(screen.value);
}

function clearScreen(){
    screen.value = "";
}