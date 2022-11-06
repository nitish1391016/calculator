var screen=document.getElementById('screenvalue');
let bgColor=document.getElementById('whole');
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
    bgColor.style.setProperty("--r",257);
    bgColor.style.setProperty("--g",257);
    bgColor.style.setProperty("--b",257);
}


// selecting the selector with help of class(or we can by id)
let bunch=document.querySelector(".btn");

