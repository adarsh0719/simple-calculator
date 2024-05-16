const display=document.querySelector("[display]");
const copyed=document.querySelector("[copyed]");
function fun(x){
    display.value+=x;
}
function empty(){
    display.value="";
}
function answer(){
    display.value=eval(display.value);
}
async function copy(){
    try{
await navigator.clipboard.writeText(display.value);
copyed.innerText='copied';}
    catch(e){
    }
}



