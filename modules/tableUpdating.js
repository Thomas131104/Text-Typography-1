// Đảm bảo script chạy khi trang đã được tải
window.onload = function() {
    const tbody = document.getElementById('main-table-concept'); // Lấy tbody
    const totalCell = document.querySelector('tfoot td b'); // Lấy thẻ b để hiển thị số lượng người đang hoạt động

    // Sử dụng fetch để tải dữ liệu từ file JSON
    fetch('data.json')
        .then(response => response.json()) // Chuyển phản hồi thành JSON
        .then(data => {
            let activeCount = 0; // Biến đếm số người đang hoạt động

            // Lặp qua dữ liệu và tạo hàng cho bảng
            data.forEach((item, index) => {
                const row = document.createElement('tr');
                
                const idCell = document.createElement('td');
                idCell.textContent = index + 1; 

                const nameCell = document.createElement('td');
                nameCell.textContent = item.name;

                const statusCell = document.createElement('td');
                statusCell.textContent = item.status ? 'Đậu' : 'Rớt'; 

                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(statusCell);
                
                tbody.appendChild(row);

                // Nếu trạng thái là true, tăng biến đếm
                if (item.status) {
                    activeCount++;
                }
            });

            // Cập nhật "Tổng cộng"
            totalCell.textContent = activeCount; // Cập nhật số lượng người đang hoạt động
        })
        .catch(error => {
            console.error('Có lỗi khi tải dữ liệu:', error);
        });
};
