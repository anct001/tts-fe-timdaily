import React, { useState } from 'react';
import { Search, Bell, ChevronRight } from 'lucide-react';

// Header Component
const Header = () => (
  <header className="bg-purple-800 p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <a href="/" className="text-2xl font-bold text-white">Tìm Đại Lý</a>
      <div className="hidden md:flex space-x-4 gap-2">
        {['Đăng Tin Đại Lý', 'Nhận Làm Đại Lý', 'Tin Hiệu Xét', 'Hướng Dẫn', 'Báo Giá', 'Đăng Ký', 'Đăng Nhập'].map((item) => (
          <button key={item} className="text-white hover:text-purple-300">{item}</button>
        ))}
      </div>
      <button className="md:hidden text-white">Menu</button>
    </nav>
  </header>
);

// Search Component
const SearchBar = () => (
  <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
    <input type="text" placeholder="Nhập sản phẩm cần tìm cung cấp..." className="flex-grow p-3 rounded text-black" />
    <input type="text" placeholder="Tất cả danh mục" className="md:w-1/4 p-3 rounded text-black" />
    <button className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Tìm Kiếm</button>
  </div>
);

// Post Item Component
const PostItem = ({ title, author, date, views }) => (
  <div className="bg-white text-black p-4 rounded-lg mb-4 flex items-center hover:bg-gray-100">
    <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4"></div>
    <div className="flex-grow">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-600">{author} • {date} • {views} lượt xem</p>
    </div>
    <ChevronRight className="text-gray-400" />
  </div>
);

// Job Listing Component
const JobListing = ({ title, company, location }) => (
  <div className="bg-white text-black p-4 rounded-lg mb-4 hover:bg-gray-100">
    <h3 className="font-bold">{title}</h3>
    <p className="text-sm text-gray-600">{company} • {location}</p>
  </div>
);

// Main Content Component
const Content1 = () => {
  const [activeTab, setActiveTab] = useState('Cần Tìm Đại Lý');

  return (
    <main className="container ml-48 px-4 py-8 w-1/2 left-1/4">
      <div className="mb-4 flex space-x-4">
        <button
          className={`px-4 py-2 font-bold ${activeTab === 'Cần Tìm Đại Lý' ? 'bg-blue-200 text-blue' : 'bg-white text-blue'}, rounded-lg`}
          onClick={() => setActiveTab('Cần Tìm Đại Lý')}
        >
          Cần Tìm Đại Lý
        </button>
        <button
          className={`px-4 py-2 font-bold ${activeTab === 'Tin Nhận Làm Đại Lý Mới' ? 'bg-blue-200 text-blue' : 'bg-white text-blue'}, rounded-lg `}
          onClick={() => setActiveTab('Tin Nhận Làm Đại Lý Mới')}
        >
          Muốn Làm Đại Lý
        </button>
      </div>
      <div
        className="bg-white p-2 rounded-lg overflow-y-auto"
        style={{height: '600px' }}
      >
        {activeTab === 'Cần Tìm Đại Lý' && (
          <div>
            <h2 className="text-2xl font-bold mb-2 text-black text-center">Cần Tìm Đại Lý</h2>
            <PostItem title="Mời tìm nhà phân phối tiệm áp tường 3D Vinacen" author="Trần Sĩ Hùng" date="17/10/2024" views="169" />
            <PostItem title="Tìm đại lý nhà phân phối tiệm áp tường 3D Vinacen" author="Tâm Sự Hùng" date="17/10/2024" views="100" />
            <PostItem title="Mời tìm nhà phân phối tiệm áp tường 3D Vinacen" author="Trần Sĩ Hùng" date="17/10/2024" views="169" />
            <PostItem title="Tìm đại lý nhà phân phối tiệm áp tường 3D Vinacen" author="Tâm Sự Hùng" date="17/10/2024" views="100" />
            <PostItem title="Mời tìm nhà phân phối tiệm áp tường 3D Vinacen" author="Trần Sĩ Hùng" date="17/10/2024" views="169" />
            <PostItem title="Tìm đại lý nhà phân phối tiệm áp tường 3D Vinacen" author="Tâm Sự Hùng" date="17/10/2024" views="100" />
            <PostItem title="Mời tìm nhà phân phối tiệm áp tường 3D Vinacen" author="Trần Sĩ Hùng" date="17/10/2024" views="169" />
            <PostItem title="Tìm đại lý nhà phân phối tiệm áp tường 3D Vinacen" author="Tâm Sự Hùng" date="17/10/2024" views="100" />
            <PostItem title="Mời tìm nhà phân phối tiệm áp tường 3D Vinacen" author="Trần Sĩ Hùng" date="17/10/2024" views="169" />

            <button class="border border-1 border-purple-500 text-purple-500 font-bold px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition w-full">
              Tìm Hiểu Thêm
            </button>

            {/* Add more PostItems as needed */}
          </div>
        )}
        {activeTab === 'Tin Nhận Làm Đại Lý Mới' && (
          <div>
            <h2 className="text-2xl font-bold mb-2 text-black text-center">Muốn Làm Đại Lý</h2>
            <PostItem title="Tìm đại lý nhà phân phối tiệm áp tường 3D Vinacen" author="Tâm Sự Hùng" date="17/10/2024" views="100" />
            <PostItem title="Mời tìm nhà phân phối tiệm áp tường 3D Vinacen" author="Trần Sĩ Hùng" date="17/10/2024" views="169" />
            <JobListing title="Tin muốn làm đại lý các mặt hàng nước-công-nghiệp" company="Mạnh Hiếu" location="Hà Nội" />
            <JobListing title="Tin muốn làm đại lý các mặt hàng nước-công-nghiệp" company="Minh Quân" location="Hồ Chí Minh" />
            <button class="border border-1 border-purple-500 text-purple-500 font-bold px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition w-full">
              Tìm Hiểu Thêm
            </button>
            {/* Add more JobListings as needed */}
          </div>
        )}
      </div>
    </main>
  );
};

const Content2 = () => {
  const [activeTab, setActiveTab] = useState('Cần Tìm Đại Lý');

  return (
    <main className="container mx-auto px-4 py-8">
      
      <div
        className="bg-white p-2 rounded-lg overflow-y-auto"
        style={{ minHeight: '300px', maxHeight: '600px' }}
      >
          <div>
            <h2 className="text-2xl font-bold mb-2 text-black text-center">Tin Nhận Làm Đại Lý Mới</h2>
            <JobListing title="Tin muốn làm đại lý các mặt hàng nước-công-nghiệp" company="Mạnh Hiếu" location="Hà Nội" />
            <JobListing title="Tin muốn làm đại lý các mặt hàng nước-công-nghiệp" company="Minh Quân" location="Hồ Chí Minh" />
            <button class="border border-1 border-purple-500 text-purple-500 font-bold px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition w-full">
              Tìm Hiểu Thêm
            </button>
            {/* Add more JobListings as needed */}
          </div>
      </div>
    </main>
  );
};

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

// Main HomePage Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <section className="py-20 text-center text-black bg-purple-500">
        <h1 className="text-4xl font-bold mb-4">Cùng Khám Phá</h1>
        <p className="text-2xl mb-8">10,000+ Đại Lý Và Nhà Cung Cấp Tại VN</p>
        <SearchBar />
      </section>
      <Content1 />
      <Content2 />
      <Footer />
    </div>
  );
};

export default HomePage;
