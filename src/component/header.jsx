import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaShoppingCart, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full shadow-md">
      {/* Top Header */}
      <div className="bg-blue-300 flex justify-between items-center gap-4 px-6 py-3 ">
            <div className="w-1/4 bg-red-500 p-4 text-white">
                <div className="flex items-center w-max h-max bg-blue-500 text-white font-bold justify-center rounded-md">
                    <span>Đây là Logo</span>
                </div>
            </div>
            <div className="w-1/4 bg-blue-500 p-4 text-white rounded-md"> 
                <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-blue-600  size-11" />
                    <span className="font-bold">Số 7, Phùng Hưng, Hà Đông, HN</span>
                </div>
          </div>
            <div className="w-1/4 bg-green-500 p-4 text-white rounded-md">
                <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-blue-600 size-11" />
                    <span className="font-bold">Canhthach10@gmail.com</span>
                </div>
            </div>
            <div className="w-1/4 bg-yellow-500 p-4 text-white rounded-md">
                <div className="flex items-center space-x-2">
                    <FaPhone className="text-blue-600 size-11" />
                    <span className="font-bold">0349.566.377</span>
                </div>
            </div>
       
      </div>

      {/* Navigation */}
      <nav className="bg-blue-800 text-white">
        <div className="container mx-auto flex justify-between items-center px-6 py-2">
          {/* Menu */}
          <ul className="flex space-x-6 text-sm font-semibold gap-4">
            <li className="relative group">
              <a href="#" className="hover:text-gray-300">TRANG CHỦ</a>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-gray-300">LỐP Ô TÔ ▼</a>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-gray-300">DẦU NHỚT ▼</a>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-gray-300">ẮC QUY ▼</a>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-gray-300">BẢO DƯỠNG ▼</a>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-gray-300">PHỤ TÙNG, PHỤ KIỆN ▼</a>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-gray-300">CỨU HỘ 24/7 ▼</a>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-gray-300">DỊCH VỤ ▼</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">TIN TỨC</a>
            </li>
          </ul>

          
          <div className="flex items-center bg-white px-3 py-1 rounded-lg shadow-md w-80">
            <input
              type="text"
              placeholder="Tìm kiếm ..."
              className="flex-grow outline-none text-gray-700 text-sm"
            />
            <FaSearch className="text-gray-600 ml-2 cursor-pointer" />
          </div>
        </div>
      </nav>
    </header>
  );
}
