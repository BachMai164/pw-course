// Bài 1: Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau
function multiply(a, b) {
    console.log(`${a} x ${b} =`, a * b);
}
multiply(3, 4);
multiply(5, 6);

// Bài 2 Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau. .
function findMin(a, b, c) {
    return Math.min(a, b, c);
}
console.log("Giá trị nhỏ nhất là:", findMin(3, 7, 2));
console.log("Giá trị nhỏ nhất là:", findMin(9, 1, 5));

// Bài 3: Viết hàm getTopStudents nhận 2 tham số:
function getTopStudents(students, threshold) {
    const top = [];
    for (let student of students) {
        if (student.score >= threshold) {
            top.push(student.name);
        }
    }
    return top;
}
const studentsList = [
    { name: "Mai", score: 9 },
    { name: "Thông", score: 6 },
    { name: "Huyền", score: 8.5 }
];
console.log("Top students:", getTopStudents(studentsList, 8));

// Bài 4: Viết hàm calculateInterest nhận 3 tham số
function calculateInterest(principal, rate, years) {
    const total = principal + (principal * rate * years) / 100;
    return total;
}
console.log("Tổng tiền sau 3 năm:", calculateInterest(1000000, 5, 3));
