
const vibra  = addEventListener("click", () =>{
    const vibra = document.querySelector(".vibra")
    if(vibra == "click"){
        navigator.vibrate(1000);
    }
})
