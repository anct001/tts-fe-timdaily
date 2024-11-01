import React, { useState, useEffect } from 'react';

const SearchBar = () => {
    const [searchCategory, setSearchCategory] = useState('Tìm Nhà Cung Cấp');
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('Tất cả danh mục');
    const [suggestions, setSuggestions] = useState([]);

    // Sample product categories
    const categories = ['Tất cả danh mục', 'Đồ Gia Dụng', 'Điện Tử', 'Thực Phẩm', 'Thời Trang', 'Đồ Chơi', 'Nội Thất'];

    // Sample data for search suggestions
    const sampleData = [
        { name: 'Nhà cung cấp điện tử ABC', category: 'Điện Tử' },
        { name: 'Đồ Gia Dụng DEF', category: 'Đồ Gia Dụng' },
        { name: 'Đại lý thực phẩm GHI', category: 'Thực Phẩm' },
        { name: 'Thời trang JKL', category: 'Thời Trang' },
        { name: 'Đồ chơi XYZ', category: 'Đồ Chơi' },
        { name: 'Nội thất MNO', category: 'Nội Thất' },
    ];

    // Update suggestions based on keyword and selected category
    useEffect(() => {
        if (keyword) {
            const filteredSuggestions = sampleData.filter(item =>
                item.name.toLowerCase().includes(keyword.toLowerCase()) &&
                (category === 'Tất cả danh mục' || item.category === category)
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    }, [keyword, category]);

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
            <div className="flex flex-col md:flex-row gap-4 relative">
                {/* Keyword Input */}
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Nhập từ khóa tìm kiếm..."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className="flex-grow p-3 rounded text-black border border-gray-300 w-full"
                    />
                    {/* Suggestions Dropdown */}
                    {suggestions.length > 0 && (
                        <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg z-10 max-h-40 overflow-y-auto shadow-lg">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        setKeyword(suggestion.name);
                                        setSuggestions([]);
                                    }}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {suggestion.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Category Dropdown */}
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="md:w-1/4 p-3 rounded overflow-y-auto text-black border border-gray-300"
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
