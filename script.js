function showMenu(){
    document.getElementById("mobile_menu").classList.add("show-menu");
}

function hideMenu(){
    document.getElementById("mobile_menu").classList.remove("show-menu");
}

(() => {
    document.getElementById("hamburger-menu").addEventListener("click", showMenu);
    document.querySelector("body").addEventListener("click", hideMenu);
})()