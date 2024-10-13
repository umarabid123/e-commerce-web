import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Correct imports
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import About from '../pages/about/About'
import ContactUs from '../pages/conatct/Contact'
import LoginPage from '../pages/loginPage/LoginPage'
import SignUpPage from '../pages/signUp/SignUp'
import FAQs from '../pages/faqs/Faqs'
import ProductCard from '../components/product_card/ProductCrad'
import Products from '../pages/product/Product'

const AppRoutes = () => {  // Renamed component to avoid naming conflict
  return (
   <div className="app-routes">
     <BrowserRouter>
     <Navbar />
       <Routes> {/* Use Routes from react-router-dom */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/products" element={<Products />} />
       </Routes>
       <Footer />
     </BrowserRouter>
   </div>
  )
}

export default AppRoutes