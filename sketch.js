var state="login"
var database 
var x
var check
var y

function preload(){

}

function setup(){
document.getElementById("mc").style.display="none"
document.body.style.zoom="100%"

}
function draw(){
    x= document.getElementById("name").value;
    y=document.getElementById("pass").value;


    
}
function check(){
    if(perm==="block"){
        alert(" This account is locked!!")
    }
    if(x==="Pushkar"&&y==="Pushkar@9899"||x==="Himanshu"&&y==="Himanshu@9807"){
        var perm="allow"
        if(perm==="allow"){
            document.getElementById("form").style.display="none"
            document.getElementById("mc").style.display="block"
        }
        else{
            alert("This id is either banned or doesn't exist")
        }
    }
    else{
     alert("Wrong Id And Password");
    }
}
