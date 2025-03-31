const btn = document.getElementById('button');

console.log(btn);

//Mouse Functions with addEventListener 
//*click*mouseover*mouseout

btn.addEventListener('click',()=>{
    console.log("Button Click")
    alert('Button Clicked');
})

btn.addEventListener('mouseover',()=>{
    btn.classList.add('buttonHover');
    console.log('Mouse Hover');
  
})

btn.addEventListener('mouseout',()=>{
    btn.classList.remove('buttonHover');
    console.log('Mouse Removed');
  
})

//Key Functions with addEventListener
//*keydown*keypress*keyup

document.addEventListener('keydown',(Event)=>{
    if (Event.key === 'Enter') {
       // alert('Enter key is pressed!!');
        console.log('Enter key is pressed!!');
    }
})

document.addEventListener('keypress',(Event)=>{
    if (Event.key === 'Enter') {
       // alert('Enter key is press down!!');
        console.log('Enter key is press down!!');
    }
})

document.addEventListener('keyup',(Event)=>{
    if (Event.key === 'Enter') {
       // alert('Enter key is press up!!');
        console.log('Enter key is press up!!');
    }
})

document.addEventListener('keypress',(Event)=>{
    if (Event.key >= 'a' || Event.key >='A' && Event.key <='A' || Event.key <='Z') {
       // alert('Enter key is press up!!');
        console.log(`${Event.key} key is pressed up!!`);
    }
})