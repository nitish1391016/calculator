var screen=document.getElementById('screenvalue');
let bgColor=document.getElementById('whole');
// screenvalue is id of the calculator(text box input) screen
function btnClick(val){//only for when numbers clicked
    screen.value+=val;
    //appends the new clicked value
}

function result(){//when '=' clicked

    try{
        bgColor.style.setProperty("--r",0);
        bgColor.style.setProperty("--g",137);
        bgColor.style.setProperty("--b",0);

        screen.value=eval(screen.value);
    }
    catch(e){
        bgColor.style.setProperty("--r",137);
        bgColor.style.setProperty("--g",0);
        bgColor.style.setProperty("--b",0);
        screen.value="";
    }
}

function clean(){//when 'c' clicked
    screen.value="";
}


// selecting the selector with help of class(or we can by id)
let bunch=document.querySelector(".btn");


