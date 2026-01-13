# Link Bio - Trang Bio Cá Nhân

Trang bio HTML đơn giản, tối ưu cho mobile, sử dụng Tailwind CSS.

## 📁 Cấu trúc dự án

```
Link-Bio/
├── index.html              # File HTML chính
├── assets/
│   ├── css/
│   │   └── style.css      # File CSS (không dùng nữa, đã chuyển sang Tailwind)
│   ├── js/
│   │   └── main.js        # File JavaScript chính
│   └── images/
│       └── (thêm ảnh của bạn vào đây)
└── README.md              # File hướng dẫn này
```

## 🚀 Cách sử dụng

### 1. Chỉnh sửa thông tin cá nhân

Mở file `assets/js/main.js` và chỉnh sửa object `bioData`:

```javascript
const bioData = {
  name: 'Tên của bạn', // Thay đổi tên
  bio: 'Mô tả ngắn về bản thân', // Thay đổi mô tả
  avatar: 'assets/images/avatar.jpg', // Đường dẫn ảnh đại diện
  links: [
    {
      title: 'GitHub',
      url: 'https://github.com/username',
      icon: '🔗',
    },
    // Thêm các link khác...
  ],
};
```

### 2. Thêm ảnh đại diện

- Đặt ảnh đại diện vào thư mục `assets/images/`
- Đặt tên file là `avatar.jpg` (hoặc cập nhật đường dẫn trong `main.js`)
- Khuyến nghị: ảnh vuông, kích thước 400x400px trở lên

### 3. Thêm/sửa/xóa links

Chỉnh sửa mảng `links` trong `bioData`:

```javascript
links: [
  {
    title: 'Tên hiển thị',
    url: 'https://link-của-bạn.com',
    icon: '🔗', // Emoji hoặc icon
  },
];
```

## 🎨 Tùy chỉnh giao diện

Mở file `index.html` để chỉnh sửa:

- **Màu sắc**: Thay đổi các class Tailwind (ví dụ: `bg-gray-50` → `bg-blue-50`)
- **Font chữ**: Đã dùng font Nunito từ Google Fonts
- **Background**: Chỉnh sửa gradient trong thẻ `<style>`

## 📱 Responsive

- Giao diện được thiết kế **mobile-first**
- Tự động điều chỉnh trên màn hình lớn hơn
- Tối ưu cho điện thoại (320px - 768px)

## 🌐 Xem trang local

### Cách 1: Mở trực tiếp file

- Double-click vào `index.html` để mở bằng trình duyệt

### Cách 2: Dùng local server (khuyến nghị)

**Với Python:**

```bash
python -m http.server 8000
```

Sau đó mở: `http://localhost:8000`

**Với Node.js:**

```bash
npx serve
```

hoặc

```bash
npx http-server
```

## 📝 Lưu ý

- Đảm bảo tất cả đường dẫn file đều đúng
- Kiểm tra console browser để debug nếu có lỗi
- Nếu ảnh không load được, sẽ tự động ẩn (không hiển thị broken image)

## 🔧 Công nghệ sử dụng

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript (ES6+)
- Google Fonts (Nunito)

## 📄 License

Tự do sử dụng và chỉnh sửa theo nhu cầu.

---

**Chúc bạn tạo được trang bio đẹp! 🎉**
