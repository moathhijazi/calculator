var keyboard = document.querySelector('.keyboard')
var screens = document.querySelector('.screen')

keyboard.addEventListener('click' , () => {

    
    screens.style.boxShadow = "rgba(255, 255, 255, 0.35) 0px 5px 15px" ; 
    
    setTimeout(() => {
        screens.style.boxShadow = "none" ; 
    }, 250);
   
})

function cal(int) {
    var screens = document.querySelector('.screen')
    
    const regex = /[=]/g;
    const matches = screens.innerHTML.match(regex);
    
    if(matches) {
        del()
        screens.append(int)  ;
    }else{
        screens.append(int)  ; 

    }
        
    
    
}
function find() {
    var screens_eq = document.querySelector('.screen').innerHTML
    var result = eval(screens_eq)
    document.querySelector('.screen').innerHTML = ` = ${result}`

}
function del() {
    var screens = document.querySelector('.screen')
    screens.innerHTML = null ;

}

document.addEventListener("keydown", function(event) {
    
    if (/[0-9]/.test(event.key)) {
         
           
        cal(event.key)
        
       
    }
    
});
