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
      
      {/* Xóa paddingTop 120px nếu đang ở trang trẻ em để tràn viền */}
      <main style={{ paddingTop: useCustomPageChrome ? '0px' : '120px' }}>
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
