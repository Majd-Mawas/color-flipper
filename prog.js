let colors= ["#f1f5f8","#23ef84","#549e54","#fe549a","#b56e8f"]
let getBtn = document.getElementById("btn")
let colo = document.getElementById("colo")
let finalColor

getBtn.addEventListener("click",function(){
    finalColor = colors[getRandNum()]
    colo.innerHTML="Background Color :  <span id='co'>"+finalColor+"</span>"
    document.body.style.backgroundColor = finalColor
    document.getElementById("co").style.color = "#2e7ff8"

})

function getRandNum(){
    let x = Math.floor(Math.random() * colors.length)
    return x
}