let arr = [2, 4, 10, 22, 100];
console.log(arr.sort( () => {
    let res = Math.random() - 0.5;
    console.log(res);
    console.log(res);
    
    return res;
}));