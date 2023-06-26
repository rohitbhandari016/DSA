const fact = (num) => {
    if(num < 0){
        return "number has to be positive."
    }
    
    //base case
    if(num == 0 || num == 1){
        return 1;
    //recursive case
    }else{
        return num * fact(num-1);
    }
};

console.log(fact(5));
