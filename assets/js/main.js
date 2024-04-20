const Toggle = document.getElementById('toggle');
const Menu = document.getElementById('menu');

Toggle.addEventListener("click",()=>{
    if(Menu.className == "hidden"){
        Menu.classList.remove("hidden");
        
    }
    else{
        Menu.classList.add("hidden");
    }
});