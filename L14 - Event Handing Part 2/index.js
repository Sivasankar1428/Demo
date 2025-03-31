console.error("Input Event");
const inputElem = document.getElementById('name');
const outputElem = document.getElementById('name-output');
console.log(inputElem);
console.log(outputElem);

//input Event


inputElem.addEventListener('input',()=>{
    outputElem.textContent =`Typed Name :: ${inputElem.value}`;

})


console.error("Change Event");
const dropDown = document.getElementById('car');
const dropDown1 = document.getElementById('selected-car');

console.log(dropDown);
console.log(dropDown1);

//change Event
dropDown.addEventListener('change',()=>{
    dropDown1.textContent = `Selected Value :: ${dropDown.value}`;
});


