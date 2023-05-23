const a = [12, 11, 13, 5, 6];

for (let i = 1; i < a.length; i++) {
  let temp = a[i];
  let j = i - 1;
  for (; j >= 0; j--) {
    if (a[j] > temp) {
      a[j + 1] = a[j];
    } else {
      break;
    }
    console.log(a)
  }
  a[j+1] = temp
}

console.log(a);
