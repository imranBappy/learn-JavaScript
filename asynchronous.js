function programmer(isProgrammer) {
    const promise = new Promise((resolve, reject)=>{
    if (isProgrammer) {
        const person = {
            name:'Imran',
            job:'Programmer'
        }
        setTimeout(() => {
            resolve(person)
        }, 1000);
    }else{
        setTimeout(() => {
            reject(new Error('you ara a no programmer'))
        }, 500);
    }
    })
    return promise
}
// const programmerSummary = obb =>{
//     return new Promise((resolve, reject)=>{
//         resolve(`${`Hello ${obb.name} you ara `} a good ${obb.job}`)
//     })
// }

const programmerSummary = obb =>{
    return Promise.resolve(`${`Hello ${obb.name} you ara `} a good ${obb.job}`)
}

programmer(true)
    .then(programmerSummary)
    .then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err.message);
    })
