let buttons=document.querySelectorAll('.box')

let bg=document.querySelector('body')
buttons.forEach( function(colorchang){ 
    colorchang.addEventListener('click',function(e){
       
if (e.target.id === 'red'){
        bg.style.backgroundColor=e.target.id;
        }
if (e.target.id === 'blue'){
        bg.style.backgroundColor=e.target.id;
        }
if (e.target.id === 'green'){
        bg.style.backgroundColor=e.target.id;
        }
if (e.target.id === 'yellow'){
        bg.style.backgroundColor=e.target.id;
        }
if (e.target.id === 'orange'){
        bg.style.backgroundColor=e.target.id;
        }
if (e.target.id === 'pink'){
        bg.style.backgroundColor=e.target.id;
        }

})
});