document.addEventListener('DOMContentLoaded', function() {
    const flipBook = document.getElementById('flipbook');

    // Khởi tạo thư viện PageFlip
    const pageFlip = new St.PageFlip(flipBook, {
        width: 400, // Chiều rộng 1 trang
        height: 600, // Chiều cao 1 trang
        size: "fixed",
        minWidth: 300,
        maxWidth: 500,
        minHeight: 400,
        maxHeight: 700,
        maxShadowOpacity: 0.5,
        showCover: false, // 
        mobileScrollSupport: false
    });

    // Tải các trang từ HTML có sẵn
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));
});