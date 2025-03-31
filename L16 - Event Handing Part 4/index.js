window.addEventListener('resize',()=>{
    const dimension = `Window Dimension : ${window.innerWidth} px X ${window.innerHeight} px`;
    console.log(dimension);
    document.getElementById('dimensions').textContent = dimension;
});


console.log()

window.addEventListener('load',()=>{
    console.log('Window Loaded');
});

window.addEventListener('scroll',()=>{
    console.log('Window Scrolled');
});