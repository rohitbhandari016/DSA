const printNum = (num) => {
    if(num === 0){
        return;
    } 
    console.log(num);
    printNum(num -1)
    console.log(num);

}

printNum(4)