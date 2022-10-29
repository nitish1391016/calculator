var screen=document.getElementById('screenvalue');

function myMessage() {
  }
function btnClick(val){
    
    screen.value+=val;
}

function result(){
    screen.value=eval(screen.value);
}

function clean(){
    console.log("hsam");
    screen.value="";
}