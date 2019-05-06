function menuMobile() {
    var navBarElement = document.getElementById("navigation");

    if (navBarElement.className === "navigation"){
        navBarElement.className += " menu-mobile-js";
        document.getElementById("navigation-mobile").innerHTML = "<a>&cross;</a>";
    } else {
        navBarElement.className = "navigation";
        document.getElementById("navigation-mobile").innerHTML = "<a>&#9776;</a>";
    }
}