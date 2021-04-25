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
const programmerSummary = obb =>{
    return new Promise((resolve, reject)=>{
        resolve(`${`Hello ${obb.name} you ara `} a good ${obb.job}`)
    })
}

async function asyncFun(prams){
    try {
        const pro = await programmer(prams)
        const result = await programmerSummary(pro)
        // console.log(result);
        return result
    } catch (err) {
        console.log(err.message);
    }
}

// asyncFun(false)
// .then((res)=>console.log(res))

// const programmerSummary = obb =>{
//     return Promise.resolve(`${`Hello ${obb.name} you ara `} a good ${obb.job}`)
// }

// programmer(true)
//     .then(programmerSummary)
//     .then(result=>{
//         console.log(result);
//     }).catch(err=>{
//         console.log(err.message);
//     })

// const promise1 = Promise.resolve('This is promise1')

// const promise1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve('This is promise1')
//     }, 400);
// })

// const promise2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve('This is promise2')
//     }, 400);
// })

// promise1.then(res=>console.log(res))
// promise2.then(res=>console.log(res))

// Promise.all([promise1, promise2]).then(res=>{
//     console.log(res);
// })

// Promise.race([promise2, promise1]).then(res=>{
//     console.log(res);
// })


// const friendlyFunction = async ()=>{
//     const result = await promise1
//     console.log(result);
// }

// friendlyFunction()

