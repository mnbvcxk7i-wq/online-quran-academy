window.addEventListener("load", function(){

    document.getElementById("loader").style.display="none";

});

// Dark Mode

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkBtn.innerHTML="☀️";
    }else{
        darkBtn.innerHTML="🌙";
    }

});