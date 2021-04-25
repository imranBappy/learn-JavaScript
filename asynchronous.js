
function programmer(isProgrammer) {
    const promise = new Promise((resolve, reject)=>{
    if (isProgrammer) {
        const person = {
            name:'Imran',
            jon:'Programmer'
        }
        setTimeout(() => {
            resolve(person)
        }, 500);
        
    }else{
        setTimeout(() => {
            reject(new Error('you ara a no programmer'))
        }, 500);
    }
    })
    return promise
}

programmer(false).then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err.message);
})

