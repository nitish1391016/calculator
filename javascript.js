var screen=document.getElementById('screen');
screen.value="just calculate!!";
function btnClick(value){
    screen.value+=value;
}

function result(){
    screen.value=eval(screen.value);
}

function clearScreen(){
    screen.value = "";
}
