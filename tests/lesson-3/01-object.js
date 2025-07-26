// Bài 1: Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. Sau đó in ra năm sản xuất của xe.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log("Năm sản xuất xe là" + car.year);

// Bài 2: Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.
const person = {
    name: "Mai",
    address: {
        street: "thới Hòa",
        city: "TP Hồ Chí Minh",
        country: "Việt Nam"
    }
};
console.log("Tên đường:" + person.address.street);

// Bài 3 Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. 
// Biết object student bao gồm 2 thuộc tính: name và grades. 
// Trong đó grades là một object với 2 thuộc tính kiểu number: math và english.
const student = {
    name: "Mai",
    grades: {
        math: 10,
        english: 6
    }
};
console.log("Điểm môn toán: " + student["grades"]["math"]);

// Bài 4: Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mớ
const settings = {
    volume: 70,
    brightness: 70
};
settings.volume = 90;
console.log(settings);

// Bài 5: Tạo một object bike và sau đó thêm thuộc tính color vào object đó
const bike = {
    make: "Honda",
};
bike.color = "Red";
console.log(bike);

// Bài 6: Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này
const employee = {
    name: "Mai",
    age: 26
};
delete employee.age;
console.log(employee);

// Bài 7.
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};
console.log(school);
