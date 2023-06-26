const fact = (num) => {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial = factorial * i;
  }

  return factorial;
};

console.log(fact(5));
