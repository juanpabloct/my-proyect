//document.getElementsByTagName('h2')[0].innerText=('a, b, c')

 //tipos de datos 
//document.write("motos")
/*setTimeout(function(){
    document.getElementsByTagName('h2')[0].innerText=('a, b, c')

 },3000)*/


 document.getElementById("on").addEventListener("click", on)
 
 function on(){
    document.getElementById("on").style.backgroundColor = "green"
    document.getElementById("off").style.backgroundColor = ""
}
 
 document.getElementById("off").addEventListener("click", off)

 function off(){
    document.getElementById("on").style.backgroundColor = ""
    document.getElementById("off").style.backgroundColor = "red"
}

 