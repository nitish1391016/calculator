var screen=document.getElementById('screenvalue');
let bgColor=document.getElementById('whole');
// screenvalue is id of the calculator(text box input) screen
function btnClick(val){//only for when numbers clicked
    screen.value+=val;
    //appends the new clicked value
}

function result(){//when '=' clicked
        try{    
            if(screen.value=="")
                return;
            screen.value=eval(screen.value);
            if(screen.value==undefined || screen.value=="")
                red();
        }
        catch(e){
            red();
            return;
        }
        if(isFinite(screen.value))
            green();
        else
            red();
}

function white(){
    bgColor.style.setProperty("--r",255);
    bgColor.style.setProperty("--g",255);
    bgColor.style.setProperty("--b",255);
}

function red(){
    bgColor.style.setProperty("--r",255);
    bgColor.style.setProperty("--g",0);
    bgColor.style.setProperty("--b",0);
}

function green(){
    bgColor.style.setProperty("--r",0);
    bgColor.style.setProperty("--g",225);
    bgColor.style.setProperty("--b",0);
}

function clean(){//when 'c' clicked
    screen.value="";
    white();
}


// selecting the selector with help of class(or we can by id)
let bunch=document.querySelector(".btn");

