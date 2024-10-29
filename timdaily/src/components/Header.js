
// Header Component
import React, { useState} from 'react';
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

  export default Header;