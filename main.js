
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