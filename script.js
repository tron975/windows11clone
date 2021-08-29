popup = document.querySelector(".pop-up")
var logo = document.getElementsByClassName("h1");

document.getElementById("h1").addEventListener('click', open);
document.getElementById("search").addEventListener("click", open)

function open() {
    if (popup.style.display == "none") {
        popup.style.display = 'block';
        popup.style.animation = "zoom 0.3s";
        document.getElementById('search-bar').style.display = "block"
    }

    else {
        popup.style.display = "none";
        popup.style.animation = "close 0.3s"
        
    }
}