let outputscreen = document.getElementById("inputext");
function display(num){
    outputscreen.value += num;
}
function Clear(){
    outputscreen.value = "";
}
function del(){
    outputscreen.value=outputscreen.value.slice(0,-1);
}
function Calculate(){
    try{
        outputscreen.value=eval(outputscreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}