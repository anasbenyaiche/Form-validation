let pass=document.querySelector('.enter-password')
let button = document.getElementById('test') 
let button2 = document.getElementById('reseting')
let allInputs = document.querySelectorAll('input')
let mail = document.querySelector('.enter-mail')
button.addEventListener('click',(e)=>{
    e.preventDefault()
   { if (isAllCaseFull(allInputs)=== false){
       return false
   }}
    isEmailValid(mail.value)
    isPassWordValid(pass.value)
    
})


function isPassWordValid(password) {
    const re = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/gi
    if ( !re.test(password) ) {  alert("Your password is not valid, please try to again")}
}

function isEmailValid(email) {
        var regex= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gi;
        if (!regex.test(email) )
        {  alert("Your email is not valid, please try to again")}


}
function isAllCaseFull(listform) {
    for (var i of listform) {
        if (i.value ==='') {
            alert('inputs are required')
            return false

        }
    }
}
button2.addEventListener('click',()=>{
   window.reset()
})


