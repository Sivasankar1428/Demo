//Normal Promise Function
let promiseData = new Promise((resolve,reject)=>{
    let data = '5';
    if (typeof data === 'number') {
        resolve('Success');
    }else{
        reject('Failed');
    }
}); 

promiseData.then((result)=>{
    console.log(`On Resolved ${result}`);
}).catch((error)=>{
    console.log(`On Reject ${error}`);
});

//Using similar to API with promise
function fname() {
    return new Promise((resolve,reject)=>{
        console.log('Fetching Data.......');
        setTimeout(()=>{
                const value1 = {id : 123, name : 'Siva'};
                const value2 = Math.random();
                console.log(`Random Value : ${value2}`);
                const Success = value2 > 0.3;
                if (Success) {
                    resolve(value1);
                }else{
                    reject(`Can't fetch Data.....`);
                }            
        },2000);
    });
};
fname().then((result)=>{
    console.log('On Resolved', result);
}).catch((error)=>{
    console.log('On Reject',error);
})

//Promise.all function
let promise1 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve('promise1')
    }, 5000);
})

let promise2 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve('promise2')
    }, 1000);
})

let promise3 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve('promise3')
    }, 2000);
})

Promise.all([promise1,promise2,promise3]).then((result)=>{
    console.log('Resolved all ',result);
}).catch((error)=>{
    console.log('Reject all',error);
});

Promise.race([promise1,promise2,promise3]).then((resolve)=>{
    console.log('Resolved Race',resolve)
}).catch((error)=>{
    console.log('Reject race',error)
});