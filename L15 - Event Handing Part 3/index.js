const formID = document.getElementById('feedbackForm');
const submitID = document.getElementById('response');
console.log(formID);
console.log(submitID);

formID.addEventListener('submit',function(event){
    event.preventDefault();

    const formData = new FormData (this);
     console.log(formData);

    const formDateJSON = {};

    formData.forEach((value,key)=>{
        formDateJSON[key]=value;
    });
console.log(formDateJSON);

const jsonString = JSON.stringify(formDateJSON,null,2);
submitID.innerHTML = `<pre> ${jsonString}</pre>`;
formID.reset();
});

