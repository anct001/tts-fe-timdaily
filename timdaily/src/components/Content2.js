// Secondary Content Component (Content2)
import React, { useState} from 'react';
import JobListing from './JobListing';
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

  export default Content2;