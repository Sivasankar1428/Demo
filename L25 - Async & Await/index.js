function fname (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const data = {id : 123, name :  'Sivasankar'};
            resolve(data);
        },2000);
    });
};

//Without Async & Await
function getFname(){
    console.log('Fetching Data....');
    try {
        const data = fname();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getFname();

//with Async & Await
async function getFname1 (){
    console.log('Fetching Data.....');
    try {
        let data = await fname();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getFname1();