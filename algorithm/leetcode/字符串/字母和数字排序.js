// let value = ["C1", "C2", "B1", "A1", "A3"]
let value = ["A1", "C2", "B1", "C1", "A3"];
function sortFun(a, b) {
  let c1 = a[0],
    c2 = b[0],
    num1 = a[1],
    num2 = b[1];
  if (c1 != c2) {
    if (c1 < c2) return 1;
    return -1;
  }
  return num1 - num2;
}

value.sort(sortFun);

console.log(value);
