// Main Content Component (Content1)
import React, { useState, useEffect} from 'react';
import PostItem from './PostItem';

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

  export default Content1;