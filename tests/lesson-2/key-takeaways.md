# Kho lưu trữ Git

Git lưu trữ toàn bộ phiên bản dự án, gồm lịch sử commit, branch, thay đổi...  
Có 2 loại kho:  
- Cục bộ (local) trên máy bạn  
- Từ xa (remote) trên server

---

## I. Tổng quan Git & cách dùng

### 1. Git states:  
- Working directory -> Các file mới hoặc file có thay đổi (local)
- Staging area -> vùng tạm để chuẩn bị gửi lên repository   Các file đưa vào vùng chuẩn bị commit 
- Repository -> nơi lưu trữ commit và lịch sử commit

### 2. Lệnh Git thông dụng:  
`git init`, `git config`, `git add`, `git commit`, `git log`
- git init: Dùng để khởi tạo respository cho thư mục hiện tại
- git config: Dùng để cấu hình report hoặc toàn bộ máy tinh (default)
- git add <file_name>: Thêm file hiện tại vào staging area
- git add . : Thêm toàn bộ các file có thay đổi vào staging area
- git commit -m “message”: Tạo một commit với ghi chú 

### 2. Commit convention:  
`<type>: <short_description>`
Trong đó:
 <type>: loại commit
- chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
- feat: thêm tính năng mới, test case mới
- fix: sửa lỗi 1 test trước đó

---

## II. Javascript cơ bản

### 1. Giới thiệu:  
- Biến: `var`, `let`, `const` -> dùng để lưu giá trị  (Note: const là hằng số, không thể thay đổi, var và let có thể thay đổi)
- Kiểu dữ liệu: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object  
- Toán tử so sánh: `>`, `<`, `==`, `===`, `!=`, `!==`, `>=`, `<=`  
- Toán tử một ngôi (tăng/giảm): `i++` (tăng 1), `i--` (giảm 1)  
- Toán tử số học: `+`, `-`, `*`, `/`  
- Câu điều kiện: `if`  
- Vòng lặp: `for`
- In ra màn hình: `console.log()`  
