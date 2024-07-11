// here it is the targetting the element for indivial 
// document.querySelector('#owl').onclick=function(){
//     alert('this is owl')
// }
// document.querySelector('#japan').onclick=function(){
//     alert(`sayonara nihon des`)
// }

//there are some of the other mehtod for targeting
/* 1) attach event
2)jquery but these are for knowlege as there are from itme of iexp
*/
// some of the best AEL are
//target
// let ul = document.createElement('ul')
// document.body.appendChild(li)
// let li1 =document.createElement('li')
// ul.appendChild(li1)
// let li2=document.createElement('li')
// ul.appendChild(li2)
// let img=document.createElement('img')
// function event(evt){
//     evt.target.style.visiblity="hidden"
     
     
     


document.querySelector('#images').addEventListener('click',function(e){
console.log("the image has been clicked")
},false)
document.querySelector('#owl').addEventListener('click',function(e){
console.log("the owl has been clicked")
e.preventDefault()
},false)
document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

})