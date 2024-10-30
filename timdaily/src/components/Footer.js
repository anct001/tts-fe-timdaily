// Footer Component
const Footer = () => (
    <footer className="bg-purple-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Tiêu Dùng', 'Thực Phẩm Đồ Uống', 'Thời Trang', 'Gia Dụng, Điện Máy'].map((category) => (
            <div key={category}>
              <h3 className="font-bold mb-2">{category}</h3>
              <ul>
                {['Item 1', 'Item 2', 'Item 3'].map((item) => (
                  <li key={item} className="text-sm mb-1"><a href="#" className="hover:text-purple-300">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );

  export default Footer;