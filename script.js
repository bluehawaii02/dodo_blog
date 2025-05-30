const menu = document.getElementById("menu-bar");
const nav = document.getElementById("links");

menu.addEventListener("click", e=>{
    if(nav.style.display === "block"){
        nav.style.display = "none"
    }else{
        nav.style.display = "block"
    }
});
