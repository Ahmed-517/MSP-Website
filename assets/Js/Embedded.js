let pic1 =document.getElementById("im1").style
let pic2 =document.getElementById("im2").style
let pic3 =document.getElementById("im3").style
window.onscroll= function(){
    console.log(window.scrollY)
    if(window.scrollY >= 160){
        document.getElementById("im1").style="animation-play-state: running ;"
    }if(window.scrollY >= 360){
        document.getElementById("im2").style="animation-play-state: running ;"
    }
    if(window.scrollY >= 610){
        document.getElementById("im3").style="animation-play-state: running ;"
    }
}