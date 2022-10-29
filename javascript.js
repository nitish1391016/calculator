var screen=document.getElementById('screenvalue');
// screenvalue is id of the calculator(text box input) screen

function btnClick(val){//only for when numbers clicked
    screen.value+=val;
    //appends the new clicked value
}

function result(){//when '=' clicked
    screen.value=eval(screen.value);
}

function clean(){//when 'c' clicked
    screen.value="";
}