
let theme= localStorage.getItem('theme')
if (theme== null){
    setTheme("light");
}else{
    setTheme(theme);
}


let themeDots= document.getElementsByClassName("theme-dot");

for( let i=0; i<themeDots.length; i++){
    
   themeDots[i].addEventListener('click', function(){
       let mode= this.dataset.mode
    console.log('option clicked:', mode);
    setTheme(mode);
   })
}
function setTheme(mode){
 if(mode=="light"){
     document.getElementById('theme.style').href="default.css"

 }
if(mode=="pink"){
    document.getElementById('theme.style').href="pink.css"
    
}
else if(mode=="black"){
    document.getElementById('theme.style').href="black.css"
    
}
localStorage.setItem('theme', mode)
}

const form= document.querySelector('form')
form.addEventListener('submit', event=>{
    event.preventDefault();
    console.log("submit")
})

function mailMe(form){
    message=document.myForm.inputbox3.value;
    clientName=document.myForm.inputbox1.value;
    clientEmail=document.myForm.inputbox2.value;
 
    let formdata=[];
    
    while (formdata.length>=0){
    formdata.push(message);
    formdata.push(clientName);
    formdata.push(clientEmail);
return formdata;
  
    
    }
    console.log(dataset);
}