const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-gray-800 py-12 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400 relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_80%)] pointer-events-none"></div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          {/* Giới thiệu */}
          <div className="transform hover:scale-110 transition-transform duration-300 hover:text-gray-800">
            <h3 className="text-2xl font-bold mb-4">Giới thiệu</h3>
            <p className="text-gray-700 text-base">
              Chúng tôi cung cấp các sản phẩm và dịch vụ tốt nhất về lốp, dầu và ắc quy xe hơi.
            </p>
          </div>
  
          {/* Chính sách */}
          <div className="transform hover:scale-110 transition-transform duration-300 hover:text-gray-800">
            <h3 className="text-2xl font-bold mb-4">Chính sách</h3>
            <ul className="text-gray-700 text-base space-y-3">
              <li><a href="#" className="hover:text-gray-900 font-semibold transition-colors duration-300">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-gray-900 font-semibold transition-colors duration-300">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:text-gray-900 font-semibold transition-colors duration-300">Chính sách bảo mật</a></li>
            </ul>
          </div>
  
          {/* Đối tác */}
          <div className="transform hover:scale-110 transition-transform duration-300 hover:text-gray-800">
            <h3 className="text-2xl font-bold mb-4">Đối tác</h3>
            <ul className="text-gray-700 text-base space-y-3">
              <li><a href="#" className="hover:text-gray-900 font-semibold transition-colors duration-300">Bridgestone</a></li>
              <li><a href="#" className="hover:text-gray-900 font-semibold transition-colors duration-300">Shell</a></li>
              <li><a href="#" className="hover:text-gray-900 font-semibold transition-colors duration-300">GS Battery</a></li>
            </ul>
          </div>
  
          {/* Google Map */}
          <div className="transform hover:scale-110 transition-transform duration-300 hover:text-gray-800">
            <h3 className="text-2xl font-bold mb-4">Bản đồ</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093656!2d144.9556511153219!3d-37.81732397975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218cee40!2sMelbourne%2C+Victoria%2C+Australia!5e0!3m2!1sen!2s!4v1633075860914!5m2!1sen!2s"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            ></iframe>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  