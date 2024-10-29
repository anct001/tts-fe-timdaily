import React, { useState, useEffect } from 'react';
import {ChevronRight } from 'lucide-react';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-purple-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">Tìm Đại Lý</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 gap-2">
          <a href="/dang-tin-dai-ly" className="text-white hover:text-purple-300">Đăng Tin Đại Lý</a>
          <a href="/nhan-lam-dai-ly" className="text-white hover:text-purple-300">Nhận Làm Đại Lý</a>
          <a href="/tin-hieu-xet" className="text-white hover:text-purple-300">Tin Hiệu Xét</a>
          <a href="/huong-dan" className="text-white hover:text-purple-300">Hướng Dẫn</a>
          <a href="/bao-gia" className="text-white hover:text-purple-300">Báo Giá</a>
          <a href="/dang-ky" className="text-white hover:text-purple-300">Đăng Ký</a>
          <a href="/dang-nhap" className="text-white hover:text-purple-300">Đăng Nhập</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          Menu
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-50 text-black p-4 space-y-2">
          <a href="/dang-tin-dai-ly" className="block hover:text-purple-300">Đăng Tin Đại Lý</a>
          <a href="/nhan-lam-dai-ly" className="block hover:text-purple-300">Nhận Làm Đại Lý</a>
          <a href="/tin-hieu-xet" className="block hover:text-purple-300">Tin Hiệu Xét</a>
          <a href="/huong-dan" className="block hover:text-purple-300">Hướng Dẫn</a>
          <a href="/bao-gia" className="block hover:text-purple-300">Báo Giá</a>
          <a href="/dang-ky" className="block hover:text-purple-300">Đăng Ký</a>
          <a href="/dang-nhap" className="block hover:text-purple-300">Đăng Nhập</a>
        </div>
      )}
    </header>
  );
};

// Search Component
const SearchBar = () => {
  const [searchCategory, setSearchCategory] = useState('Tìm Nhà Cung Cấp');
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  // Sample product categories
  const categories = ['Tất cả danh mục', 'Đồ Gia Dụng', 'Điện Tử', 'Thực Phẩm', 'Thời Trang', 'Đồ Chơi', 'Nội Thất'];

  const handleSearch = () => {
    console.log(`Category: ${searchCategory}`);
    console.log(`Keyword: ${keyword}`);
    console.log(`Product Category: ${category}`);
    // Perform search logic here based on selected category and keyword
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Search Category Buttons */}
      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={() => setSearchCategory('Tìm Nhà Cung Cấp')}
          className={`px-4 py-2 font-bold rounded-lg ${searchCategory === 'Tìm Nhà Cung Cấp' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Tìm Nhà Cung Cấp
        </button>
        <button
          onClick={() => setSearchCategory('Tìm Nhu Cầu Đại Lý')}
          className={`px-4 py-2 font-bold rounded-lg ${searchCategory === 'Tìm Nhu Cầu Đại Lý' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Tìm Nhu Cầu Đại Lý
        </button>
      </div>

      {/* Search Input Fields */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Keyword Input */}
        <input type="text" placeholder="Nhập từ khóa tìm kiếm..." value={keyword} 
          onChange={(e) => setKeyword(e.target.value)} 
          className="flex-grow p-3 rounded text-black border border-gray-300"
        />

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="md:w-1/4 p-3 rounded overflow-y-auto text-black border border-gray-300 "
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
        >
          Tìm Kiếm
        </button>
      </div>
    </div>
  );
};

// Post Item Component
const PostItem = ({ title, author, date, views, image }) => (
  <div className="bg-white text-black p-4 rounded-lg mb-4 flex items-center hover:bg-gray-100">
    <img src={image} alt={title} className="w-16 h-16 bg-gray-300 rounded-lg mr-4 object-cover" />
    <div className="flex-grow">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-600">{author} • {date} • {views} lượt xem</p>
    </div>
    <ChevronRight className="text-gray-400" />
  </div>
);

// Job Listing Component for Content2
const JobListing = ({ title, company, location, image }) => (
  <div className="bg-white text-black p-4 rounded-lg mb-4 flex items-center hover:bg-gray-100">
    <img src={image} alt={title} className="w-16 h-16 bg-gray-300 rounded-lg mr-4 object-cover" />
    <div className="flex-grow">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-600">{company} • {location}</p>
    </div>
  </div>
);

// Main Content Component (Content1)
const Content1 = () => {
  const [activeTab, setActiveTab] = useState('Cần Tìm Đại Lý');
  const [posts, setPosts] = useState([]);

  // Fetch data from API or use sample data with images
  useEffect(() => {
    const sampleData = {
      'Cần Tìm Đại Lý': [
        {
          title: "Mời tìm nhà phân phối tiệm áp tường 3D Vinacen",
          author: "Trần Sĩ Hùng",
          date: "17/10/2024",
          views: 169,
          image: "https://via.placeholder.com/64",
        },
        {
          title: "Tìm đại lý nhà phân phối tiệm áp tường 3D Vinacen",
          author: "Tâm Sự Hùng",
          date: "17/10/2024",
          views: 100,
          image: "https://via.placeholder.com/64",
        },
      ],
      'Muốn Làm Đại Lý': [
        {
          title: "Tìm đại lý mặt hàng nước công nghiệp",
          author: "Mạnh Hiếu",
          date: "17/10/2024",
          views: 230,
          image: "https://via.placeholder.com/64",
        },
        {
          title: "Đại lý mặt hàng gia dụng tại Hồ Chí Minh",
          author: "Minh Quân",
          date: "18/10/2024",
          views: 185,
          image: "https://via.placeholder.com/64",
        },
      ],
    };
    setPosts(sampleData[activeTab]);
  }, [activeTab]);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-4 flex justify-center space-x-4">
        <button
          className={`px-4 py-2 font-bold ${activeTab === 'Cần Tìm Đại Lý' ? 'bg-blue-200 text-blue' : 'bg-white text-blue'} rounded-lg`}
          onClick={() => setActiveTab('Cần Tìm Đại Lý')}
        >
          Cần Tìm Đại Lý
        </button>
        <button
          className={`px-4 py-2 font-bold ${activeTab === 'Muốn Làm Đại Lý' ? 'bg-blue-200 text-blue' : 'bg-white text-blue'} rounded-lg`}
          onClick={() => setActiveTab('Muốn Làm Đại Lý')}
        >
          Muốn Làm Đại Lý
        </button>
      </div>
      <div className="bg-white p-2 rounded-lg overflow-y-auto" style={{ height: '600px' }}>
        <div>
          <h2 className="text-2xl font-bold mb-2 text-black text-center">{activeTab}</h2>
          {posts.map((post, index) => (
            <PostItem
              key={index}
              title={post.title}
              author={post.author}
              date={post.date}
              views={post.views}
              image={post.image}  // Passing the image to PostItem
            />
          ))}
          <button className="border border-1 border-purple-500 text-purple-500 font-bold px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition w-full">
            Tìm Hiểu Thêm
          </button>
        </div>
      </div>
    </main>
  );
};


// Secondary Content Component (Content2)
const Content2 = () => {
  const [jobs] = useState([
    {image: "https://via.placeholder.com/64", title: "Đại lý các mặt hàng nước công nghiệp", company: "Mạnh Hiếu", location: "Hà Nội" },
    {image: "https://via.placeholder.com/64", title: "Đại lý các mặt hàng nước công nghiệp", company: "Minh Quân", location: "Hồ Chí Minh" },
    {image: "https://via.placeholder.com/64", title: "Đại lý các mặt hàng nước công nghiệp", company: "Mạnh Hiếu", location: "Hà Nội" },
    {image: "https://via.placeholder.com/64", title: "Đại lý các mặt hàng nước công nghiệp", company: "Minh Quân", location: "Hồ Chí Minh" },
    {image: "https://via.placeholder.com/64", title: "Đại lý các mặt hàng nước công nghiệp", company: "Mạnh Hiếu", location: "Hà Nội" },
    {image: "https://via.placeholder.com/64", title: "Đại lý các mặt hàng nước công nghiệp", company: "Minh Quân", location: "Hồ Chí Minh" },
  ]);

  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-2 text-black text-center">Tin Nhận Làm Đại Lý Mới</h2>
      <div className="bg-white p-2 rounded-lg overflow-y-auto" style={{ minHeight: '300px', maxHeight: '600px' }}>
        {jobs.map((job, index) => (
          <JobListing
            key={index}
            image={job.image}
            title={job.title}
            company={job.company}
            location={job.location}
          />
        ))}
        <button className="border border-1 border-purple-500 text-purple-500 font-bold px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition w-full">
          Tìm Hiểu Thêm
        </button>
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