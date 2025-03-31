/*
Document Object Model (DOM) manipulation
The following the way to Selecting & Modifying Element in DOM
1.getElementById
2.getElementsByClassName
3.getElementsByTagName
4.querySelector
5.querySelectorAll
*/
const head = document.getElementById('main-heading');

console.log(head);

console.log(head.innerHTML);
console.log(head.innerText);

head.innerHTML='Welcome Guys to My page';       //Changing element by ID name


//Changing value with SetTimeOut for 3 secs
function changeHead(){
    setTimeout(()=>{
    head.innerHTML='Welcome Guys to My page and have Great Day';       //Changing element by ID name

    },3000);
}
changeHead();


//getElementByClassName and for to iterate the array
const classNameForList = document.getElementsByClassName('list-items');
console.log(classNameForList);

for (let i = 0;  i< classNameForList.length ; i++) {
    console.log(classNameForList.item(i).innerText);
    
}

// for (let j = 0; j < classNameForList.length; j++) {
//     console.log(classNameForList.item(j).innerText = `Modified Item ${j + 1}`);
    
// }

const arr = Array.from(classNameForList);
arr.forEach((item)=>{
    console.log(item.innerText );
});


//getElementByTagName

const removeElem = document.getElementById('content').getElementsByTagName('p');
console.log(removeElem);


function fname (){
    removeElem.item(0).style.color ='red';
    removeElem.item(1).style.background ='red';
    removeElem.item(2).style.fontSize ='8000 px';
    removeElem.item(3).style.color ='green';
}
fname();



function fname1(){
    for (let i = 0;  i< removeElem.length; i++) {
        removeElem.item(i).style.paddingBottom='19px';
        
    }
}
fname1();

//Remove element
const removelement = document.getElementById('message');
    setTimeout(()=>{
            removelement.remove();
    },3000); 




const addElem = document.createElement('p');
addElem.textContent = 'Siva is Software Tester';
const demo = document.getElementById('main');
//appendChild
demo.appendChild(addElem);



//insertAdjacentHTML
demo.insertAdjacentHTML('afterbegin','<p>Siva HI</p>');
demo.insertAdjacentHTML('afterend','<p>Siva HI</p>');
demo.insertAdjacentHTML('beforebegin','<p>Siva HI</p>');
demo.insertAdjacentHTML('beforeend','<p>Siva HI</p>');

const querySelect = document.querySelector('.subtitle');
console.log(querySelect);
console.log(querySelect.textContent);
querySelect.textContent = ' HTML CSS JS'; 


