var text_button = document.querySelector("#one")
var text_w_button = document.querySelector("#two")
var button = document.querySelector("#first")
var w_button = document.querySelector("#w_button")
function more(){
    text_button.textContent = "Oh, you like it."
}
function moreoh(){
    text_w_button.textContent = "You don't like it, do you."
}
button.onclick = more;
w_button.onclick = moreoh;
