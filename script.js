popup = document.querySelector(".pop-up")
var logo = document.getElementsByClassName("h1");

document.getElementById("h1").addEventListener('click', open)

function open() {
    if (popup.style.display == "none") {
        popup.style.display = 'block';
        popup.style.animation = "zoom 0.3s"
    }

    else {
        popup.style.display = "none";
        popup.style.animation = "close 0.3s"
        
    }
}