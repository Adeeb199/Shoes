import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/Homepage/HomePage';
import Footer from './Components/Footer/Footer';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import CartPage from './Pages/Cart/CartPage';
import ItemDetails from './Components/ItemsDetails/ItemDetails';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/Cart" element={<CartPage/>} />
          <Route path="/item/:id" element={<ItemDetails/>} /> {/* Route to the item details page */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
