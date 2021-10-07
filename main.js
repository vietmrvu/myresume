var text_button = document.getElementById("one")
var text_w_button = document.getElementById("two")
var button = document.getElementById("first")
var w_button = document.getElementById("second")
function more(){
    var text_button = document.getElementById("one")
    text_button.textContent = "Oh, you like it."
}
function moreoh(){
    var text_w_button = document.getElementById("two")
    text_w_button.textContent = "You don't like it, do you."
}
button.onclick = more;
w_button.onclick = moreoh;
