# Text-Typography Project

Dự án này tạo ra một giao diện người dùng đơn giản, sử dụng HTML, CSS, và JavaScript để hiển thị một bảng thông tin và cho phép người dùng thay đổi giao diện của bảng, cũng như chuyển đổi giữa các màu nền khác nhau.

### Mô Tả

Ứng dụng bao gồm:

- Một bảng hiển thị thông tin cá nhân (ID, Họ và tên, và Dự thi).

- Một số bảng điều khiển cho phép người dùng chọn các kiểu bảng khác nhau như bảng có viền, bảng có hiệu ứng hover, bảng "zebra striping", và bảng nền tối.

- Một nút để chuyển đổi màu nền của trang và bảng giữa hai chế độ sáng và tối.

### Cấu Trúc Dự Án

```
.
├── index.html         # Trang HTML chính
├── style.css          # Tệp CSS để thiết kế giao diện
├── modules            # Thư mục chứa các module JS
│   ├── themeSwitcher.js       # Xử lý sự kiện thay đổi màu nền trang
│   └── tableProcessing.js # Xử lý sự kiện thay đổi kiểu bảng
```

### Cài Đặt

- Tải về mã nguồn: Bạn có thể tải về mã nguồn của dự án này và mở trực tiếp file index.html trong trình duyệt.

### Yêu cầu:

- Trình duyệt web hiện đại (Chrome, Firefox, Edge, Safari).

- Internet để tải Bootstrap từ CDN.

### Cách Hoạt Động

1. Bảng Thông Tin
Bảng trong giao diện sẽ hiển thị các thông tin về thí sinh tham gia dự thi, bao gồm ID, tên và trạng thái tham gia. Dưới bảng, tổng số thí sinh sẽ được tính và hiển thị.

2. Thay Đổi Giao Diện Bảng
Người dùng có thể thay đổi kiểu bảng bằng cách chọn các checkbox tương ứng:

- Bảng có viền

- Bảng với hiệu ứng "zebra striping"

- Bảng với hiệu ứng hover trên các dòng

- Bảng với nền tối

Khi người dùng nhấn nút Chọn, các class CSS sẽ được áp dụng lên bảng.

3. Chuyển Đổi Màu Nền
Ứng dụng cho phép người dùng thay đổi giữa chế độ nền sáng và nền tối bằng cách nhấn nút Chuyển màu. Khi chế độ tối được bật, nền và màu chữ của trang sẽ thay đổi thành đen và trắng. Ngược lại, khi chế độ sáng được bật, nền và màu chữ sẽ trở lại màu trắng và đen.

4. Tệp CSS
Các tệp CSS xác định cách bố trí giao diện của trang web, bao gồm việc tạo một lưới (grid) cho các phần tử và thiết lập các kiểu cho bảng và các phần tử khác.

5. JavaScript Modules
themeSwitcher.js: Quản lý sự kiện thay đổi màu nền trang và các phần tử trong grid.

tableProcessing.js: Quản lý sự kiện thay đổi các kiểu bảng khi người dùng chọn các checkbox.

### Cách Thực Thi

Chọn các kiểu bảng:

- Người dùng có thể chọn các checkbox để thay đổi kiểu bảng.

- Sau khi chọn, người dùng nhấn nút Chọn để áp dụng các thay đổi.

Chuyển đổi chế độ màu:

- Nhấn vào nút Chuyển màu để chuyển đổi giữa nền sáng và nền tối.

### Các Lưu Ý

Các phần tử trong bảng có thể được điều chỉnh thông qua các checkbox.

Chế độ màu của trang có thể được thay đổi bất cứ lúc nào bằng nút Chuyển màu.
