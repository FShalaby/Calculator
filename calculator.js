
function display(num){
document.getElementById("output").value+=num;
}

function calculate(){
    try{
        document.getElementById("output").value= eval(document.getElementById("output").value);
    }
    catch(err)
    {
        document.getElementById("output").value="Invalid"
    }
}

function cl(){
    document.getElementById("output").value="";
}

function del(){
    document.getElementById("output").value=document.getElementById("output").value.slice(0,-1);
}