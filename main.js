const buttons = document.querySelectorAll(".buttons .button")
console.log(buttons)

const visor = document.querySelector(".visor")
visor.innerHTML =""


const buttonPad = (tecla)=>{

    let clasName = tecla.className
    const special_key = clasName == "button del" || clasName == "button reset" || clasName == "button equal"? true:false

    
    if (special_key){
        
        if(clasName == "button del"){
            visor.innerHTML.charAt(visor.innerHTML.length-1) = ""

        }

    }
    else{
        visor.innerHTML = visor.innerHTML + tecla.innerHTML
    }
     

}

buttons.forEach(e =>{
    e.addEventListener("click",()=>{
        buttonPad(e)
    })
})