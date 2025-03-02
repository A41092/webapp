import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto shadow-md mb-5">
      <nav className="bg-blue-800 text-white  rounded-lg ">
        <div className="container mx-auto flex justify-between items-center px-6 py-2">
          {/* Menu */}
          <ul className="flex space-x-6 text-sm font-semibold gap-4">
            <li className="relative group">
              <a href="#" className="hover:text-gray-300">
                <FiAlignJustify className="size-10" />
              </a>
            </li>
            <li className="relative group mt-2">
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li className="relative group mt-2">
              <Link to="/lopoto">LỐP Ô TÔ</Link>
            </li>
            <li className="relative group mt-2">
              <Link to="/daunhot" className="hover:text-gray-300">
                DẦU NHỚT
              </Link>
            </li>
            <li className="relative group mt-2">
              <Link to="/acquy" className="hover:text-gray-300">
                ẮC QUY
              </Link>
            </li>
            <li className="relative group mt-2">
              <Link to="/phutungphukien" className="hover:text-gray-300">
                {" "}
                PHỤ TÙNG, PHỤ KIỆN
              </Link>
            </li>
            <li className="relative group mt-2">
              <Link to="/cuuho24h" className="hover:text-gray-300">
                {" "}
                CỨU HỘ 24/7
              </Link>
            </li>
            <li className="relative group mt-2">
              <Link to="/dichvu" className="hover:text-gray-300">
                {" "}
                DỊCH VỤ
              </Link>
            </li>
            <li className="relative group mt-2">
              <Link to="/tintuc" className="hover:text-gray-300">
                {" "}
                TIN TỨC
              </Link>
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
    </div>
  );
};

export default Navbar;
