**Lesson 5: DOM terminology Playwright basic**
# I/Function advance
## 1/ Lambda function (Arrow function)
**Định nghĩa**: Là một cách viết hàm ngắn gọn và hiện đại hơn so với cách khai báo hàm truyền thống hỗ trợ cho việc dễ dàng đọc và triển khai code giúp tiết kiệm thời gian và trực quan hơn.
**Cú pháp**:
```
(parameters) => {
    // Code here
}
```
**Ví dụ**:
```
const sayHello = () => {
       console.log("Hello, World!");
   };
const add = (a, b) => a + b;
```
## 2/ Anonymous functions
**Định nghĩa**: Là những hàm không có tên, thường được sử dụng khi cần một hàm tạm thời mà không cần phải định nghĩa một hàm được khai báo bình thường với đầy đủ thành phần. Hàm Anonymous có thể được gán cho biến hoặc cũng có thể truyền vào hàm khác như là một đối số. Mục đích giúp tiết kiệm thời gian, đơn giản code.
**Cú pháp**:
```
function (parameters) {
 // Code here
}
```
**Ví dụ**:
```
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5));
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num * 2);
});
```
# II/DOM
DOM (Document Object Model) là một giao diện lập trình ứng dụng được dùng để truy xuất các tài liệu dạng HTML và XML, có dạng là một cây cấu trúc dữ liệu được tạo bằng những cú pháp đã được quy định từ trước
Cấu tạo của một element trong DOM:
<thẻ_mở thuộc_tính="giá_trị_của_thuộc_tính">text</thẻ_đóng>
Một số thẻ HTML thường gặp:
`<div>`: Dùng để chia các khối trong trang web, giúp tổ chức và định dạng nội dung
`<h>`, `</h>`: Dùng để tạo ra các tiêu đề phân cấp từ lớn đến bé, với `<h1>` là tiêu đề lớn nhất và `<h6>` là nhỏ nhất
`<form>`, `</form>`: Dùng để chứa một biểu mẫu thông tin, cho phép người dùng nhập dữ liệu và gửi đi
`<input>`: Dùng để tạo các trường nhập liệu với nhiều loại như text, email, radio, checkbox, file, color, range, date
`<textarea>`: Hiển thị ô nhập liệu lớn hơn, cho phép người dùng nhập nhiều dòng văn bản
`<radio>`: Tạo một nút chọn dạng radio button cho phép người dùng chọn một trong nhiều lựa chọn
`<checkbox>`: Tạo một nút chọn dạng checkbox cho phép người dùng chọn nhiều tùy chọn cùng lúc
`<list>`, `<dropdown>`: Hiển thị danh sách hoặc menu thả xuống, cho phép người dùng chọn một hoặc nhiều tùy chọn từ danh sách
`<button>`: Tạo nút bấm, cho phép người dùng thực hiện hành động khi nhấn vào nút
`<table>`: Hiển thị bảng dữ liệu, giúp tổ chức thông tin theo hàng và cột
`<thead>`: Định nghĩa phần đầu của bảng, thường chứa tiêu đề cột
`<tr>`: Định nghĩa một hàng trong bảng. Mỗi hàng trong bảng được tạo thành từ một hoặc nhiều ô dữ liệu
`<th>`: Định nghĩa một ô tiêu đề trong bảng. Các ô tiêu đề thường được hiển thị đậm và căn giữa, và thường được sử dụng để đặt tên cho các cột hoặc hàng
`<tbody>`: Định nghĩa phần thân của bảng, nơi chứa dữ liệu chính của bảng
`<td>`: Định nghĩa một ô dữ liệu trong một hàng, thường chứa nội dung của ô đó
`<datepicker>`: Tạo bộ chọn ngày, cho phép người dùng chọn ngày từ một lịch
`<slider>`: Tạo thanh trượt, cho phép người dùng chọn giá trị trong một khoảng
`<iframe>`: Hiển thị nội dung từ một trang web khác bên trong trang hiện tại, cho phép nhúng nội dung từ các nguồn bên ngoài

# III/ Selector
**Định nghĩa**: Là cách xác định một hoặc nhiều phần tử web dựa vào địa chỉ HTML của nó.
Xpath: Có 2 loại là địa chỉ tuyệt đối và tương đối.
XPath tuyệt đối bắt đầu từ gốc của tài liệu (root) và chỉ định đường dẫn đầy đủ đến node mà người dùng muốn truy vấn và luôn bắt đầu bằng dấu /
Ví dụ: `/html/body/div/p`
XPath tương đối không bắt đầu từ gốc của tài liệu mà bắt đầu từ nút hiện tại (context node). Nó không cần phải chỉ định toàn bộ đường dẫn từ gốc và thường bắt đầu bằng dấu //
Ví dụ: `//div[@id='login']`
Một số cách lấy Xpath:
text(): Dùng để tìm ra phần tử có giá trị văn bản tương ứng. Ví dụ: `//div[text()='Welcome']`
contains(): Dùng để tìm ra phần tử có giá trị chứa văn bản hoặc thuộc tính tương ứng. Ví dụ: `//div[contains(text(),'Welcome')]`
# IV/Playwright basic syntax
Navigate: Tải một trang web hoặc chuyển đến một URL mới
-> await page.goto('https://shopee.vn/');

Click: Mô phỏng việc nhấp vào nút, liên kết hoặc bất kỳ phần tử nào có thể nhấp
-> await page.locator("button").click();

Input: Nhập văn bản vào các trường nhập liệu
-> page.locator("//input").fill('Playwright Viet Nam');

Radio/checkbox: Chọn hoặc bỏ chọn các nút radio/checkbox
-> page.locator("//input").check();

Select Option: Chọn một tùy chọn từ menu thả xuống
-> const dropDownList = page.locator('#month');
dropDownList.selectOption('Aug');

Set Input File: Tải lên một tệp
-> await page.locator('input[type="file"]').setInputFiles('./companyTrip/DaLat/pic1.png');

Handle Dialog: Đồng ý hoặc từ chối một dialog

page.on('dialog', async dialog => dialog.accept());
page.on('dialog', async dialog => dialog.dismiss());