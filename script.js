popup = document.querySelector(".pop-up")
const logo = document.getElementById("start");
const redirect = document.getElementById('search-mask')


document.getElementById("start").addEventListener('click', open);
document.getElementById("search").addEventListener("click", open);
redirect.addEventListener('click', search);

function open() {
    if (popup.style.display == "none") {
        popup.style.display = 'block';
        popup.style.animation = "zoom 0.4s";
        document.getElementById('search-bar').style.display = "block"
    }

    else {
        popup.style.display = "none";
        popup.style.animation = "close 0.3s"
        
    }
}

function search() {
    window.location.href = 'https://duckduckgo.com/?q=' + document.getElementById('search-bar').value + '';

}