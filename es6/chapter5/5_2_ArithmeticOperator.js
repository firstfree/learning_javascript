let x = 5;
let y = 3 - -x;
console.log(y);

const s = "5";
y = 3 + +s;
console.log(y);

const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
const p1 = -x1 * 1;
const p2 = +x2 * 2;
const p3 = +x3 * 3;
const p4 = -x4 * 4;
console.log(p1, p2, p3, p4);

x = 2;
const r1 = x++ + x++;
const r2 = ++x + ++x;
const r3 = x++ + ++x;
const r4 = ++x + x++;
y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;
console.log(r1, r2, r3, r4, r5, r6, r7, r8);