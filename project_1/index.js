const buttons = document.querySelectorAll('.button')
console.log(buttons)
const body=document.querySelector('body')
//about events
buttons.forEach( function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e.target);
        console.log(e);
        if(e.target.id === 'grey')
            {
                body.style.backgroundColor=e.target.id
            }
        if(e.target.id === 'white')
            {
                body.style.backgroundColor=e.target.id
            }
        if(e.target.id === 'yellow')
            {
                body.style.backgroundColor=e.target.id
            }
        if(e.target.id === 'blue')
            {
                body.style.backgroundColor=e.target.id
                body.style.backgroundColor="magenta"
              //myedit  //document.body.style.transition = "background-color 9s ease";
            }
        
    })
} )