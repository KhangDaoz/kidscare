import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Parents from './pages/Parents'
import Home from './pages/Home'
import Children from './pages/Children'

function App() {
  const location = useLocation();
  // Kiểm tra xem user có đang ở trang của trẻ em không
  const isChildrenRoute = location.pathname.startsWith('/children');
  const useCustomPageChrome = isChildrenRoute;

  return (
    <>
      {/* Chỉ hiện Navbar chung nếu KHÔNG phải trang trẻ em */}
      {!useCustomPageChrome && <Navbar />}
      
      {/* Dành khoảng trống theo từng breakpoint để không che nội dung trên mobile */}
      <main className={useCustomPageChrome ? '' : 'pt-24 sm:pt-28 md:pt-32'}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/children" element={<Children/>} />
          <Route path="/parents" element={<Parents/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Chỉ hiện Footer chung nếu KHÔNG phải trang trẻ em */}
      {!useCustomPageChrome && <Footer />}
    </>
  )
}

export default App
