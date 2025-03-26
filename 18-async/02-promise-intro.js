const p = new  Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved')
    }, 2000)
});

console.log(p)