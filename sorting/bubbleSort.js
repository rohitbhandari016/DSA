const a = [12 ,55,66,2,44,1]

for( i =0 ; i < a.length; i++){
  for(j = 0; j < a.length - i -1; j++){
    if(a[j] > a[j+1]){
      temp = a[j];
      a[j] = a[j+1]
      a[j+1] = temp;
    }
  }
}


console.log(a)