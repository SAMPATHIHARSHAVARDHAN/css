function movetotop() {
    window.scrollTo(0, 0);
}

function toggleMenu(){
    let menuElement=document.getElementById("menu");
    let navbarElement=document.getElementById("bars");
    if (menuElement.className=="center-menu")
    {
        menuElement.classList.remove("center-menu");
        menuElement.classList.add("center-menu-toggle");
        navbarElement.classList.remove("fa-bars");
        navbarElement.classList.add("fa-xmark");
    }
    else{
        menuElement.classList.remove("center-menu-toggle");
        menuElement.classList.add("center-menu");
        navbarElement.classList.remove("fa-xmark");
        navbarElement.classList.add("fa-bars");
       
        

    }
    
}