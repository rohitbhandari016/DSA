const f = (n) =>{
    if(n === 1 || n === 2){
        return 1
    }

    return f(n-1) + f(n-2);
}


console.log(f(6));