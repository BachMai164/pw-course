// Bài 1. Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tổng từ 1 đến 100 là:", sum);

// Bài 2. In bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// Bài 3. Mảng chứa các số lẻ từ 1 đến 99
const soLe = [];
for (let i = 1; i <= 99; i += 2) {
    soLe.push(i);
}
console.log("Số lẻ từ 1 đến 99:", soLe);

// Bài . In 10 email
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}

// Bài 5. Tổng doanh thu
const revenues = [
    { month: 1, total: 90 },
    { month: 2, total: 100 },
    { month: 3, total: 110 },
    { month: 4, total: 120 },
    { month: 5, total: 130 },
    { month: 6, total: 140 },
    { month: 7, total: 150 },
    { month: 8, total: 160 },
    { month: 9, total: 170 },
    { month: 10, total: 180 },
    { month: 11, total: 190 },
    { month: 12, total: 200 }
];
let total = 0;

for (let i = 0; i < revenues.length; i++) {
    total += revenues[i].total;
}

console.log("Tổng doanh thu trong năm là:", total);