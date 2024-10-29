// Search Component
import React, { useState} from 'react';
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

  export default SearchBar;