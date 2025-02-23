import Header from "../component/header";
import Footer from "../component/footer";
export default function Layout() {
    return (
      <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header/>
    
            {/* Container */}
            <div className="flex-1 flex justify-center items-center bg-gray-100 p-6">
            <section className="bg-white p-6 w-full max-w-2xl shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold mb-3">Section - Nội dung chính</h2>
                <p className="text-gray-700">Đây là phần nội dung của trang web.</p>
            </section>
            </div>
    
            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-3">
                <Footer/>
            Footer - Chân trang © 2025
            </footer>
      </div>
    );
  }
  