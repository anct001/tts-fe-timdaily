// Main HomePage Component
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Content1 from '../components/Content1';
import Content2 from '../components/Content2';
import Footer from '../components/Footer';

const HomePage2 = () => {
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
  
  export default HomePage2;