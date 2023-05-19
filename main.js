const buttons = document.querySelectorAll(".buttons .button")

const visor = document.querySelector(".visor")

const buttonPad = (tecla)=>{
    let clasName = tecla.className
    const special_key = clasName == "button del" || clasName == "button reset" || clasName == "button equal"? true:false

    
    if (special_key){
        
        if(clasName == "button del"){
            visor.innerHTML = visor.innerHTML.slice(0,visor.innerHTML.length-1)

        }
        else if(clasName == "button reset"){
            visor.innerHTML = ""
        }
        else{
           equal()
        }

    }
    else{
        visor.innerHTML = visor.innerHTML + tecla.innerHTML
    }

    const equal = ()=>{
        
    }
     

}


buttons.forEach(e =>{
    e.addEventListener("click",()=>{
        buttonPad(e)
    })
})