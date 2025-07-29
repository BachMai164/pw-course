// 1. Khởi động Tàu Vũ trụ K16


const departurePlanet = "Trái Đất"; // Tạo một biến departurePlanet với giá trị "Trái Đất"
const mission = "Khám phá Vũ trụ K16"; // Tạo một biến mission với giá trị "Khám phá Vũ trụ K16".
const crew = ["Cindy", "Sơn", "Helen", "Hiền", "Tú", "Huy", "Duy", "Jimmy", "Quân", "Long", "Bình", "Trang", "Huyen", "Minh",
    "Trang", "Nguyên", "Anh", "Shu", "Đào", "Nhã", "Tiên", "Tuấn", "Xuyến", "Khoa", "Yến"]; // Tạo một mảng crew chứa tên các thành viên phi hành đoà

const launchShip = function (crewArray) { //Hàm launchShip nhận mảng crew làm đầu vào và trả về  thông điệp 
    const crewList = crewArray.join(", ");
    return "Chuẩn bị khởi động! Phi hành đoàn gồm: " + crewList +
        " sẽ đồng hành cùng bạn trong chuyến phiêu lưu " + mission + "!";
};

console.log(launchShip(crew)); // Gọi hàm launchShip và in thông điệp chào mừng ra console

// 2. Tính khoảng cách đến hành tinh bí ẩn

const calculateDistance = function (speed, time) {  // Hàm calculateDistance nhận hai tham số là speed và time
    return speed * time;
};

const distance = calculateDistance(1000, 24); //   trả về khoảng cách tính toán được
console.log("Khoảng cách đến hành tinh bí ẩn là: " + distance + " km");

// 3. Chuyển thời gian sang hệ thập lục phân (hex)

let convertTimeToHex = function (decimalNumber) { // chuyển đổi thời gian từ hệ thập phân (decimal) sang hệ thập lục phân
    return decimalNumber.toString(16);
};

let hexTime = convertTimeToHex(120); // gọi hàm với thời gian là 120 giây
console.log("Thời gian dạng hex: " + hexTime + "giây");

// 4. Giải mã mật mã


const decryptCode = function (check) { // Tạo biến tạm tên là check
    let result = "";

    for (let i = 0; i < check.length; i++) { // Loop để check từng ký tự trong chuỗi
        const char = check[i];   // Gán từng ký tự (i) trong chuỗi thành biến char 

        if (char === char.toLowerCase()) { // Nếu char là chữ thường thì chuyển thành chữ hoa 
            result += char.toUpperCase();
        } else if (char === char.toUpperCase()) { // Nếu char là chữ hoa thì chuyển thành chữ thường
            result += char.toLowerCase();
        } else {    // Không phải chữ thì giữ nguyên                    
            result += char;
        }
    }

    return result;
};

const decrypted = decryptCode("K16 Challenge"); // Nhập chuỗi cần giải nhưng ko dc before initialization 
console.log("Mật mã đã giải mã: " + decrypted);

// 5. Trở về Trái Đất

const returnToEarth = function () {
    console.log("Chuẩn bị trở về Trái Đất!");
};

returnToEarth();
