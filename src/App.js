import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage} from "./pages";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { MyAccountPage } from "./pages/MyAccountPage";
import { OurStoryPage } from "./pages/OurStoryPage";
import { ProductPage } from "./pages/ProductPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
import { ShopPage } from "./pages/ShopPage";
import { PostPage } from "./pages/PostPage";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/shop' element={<ShopPage/>} />
            <Route path='/product/:id' element={<ProductPage/>} />
            <Route path='/blog' element={<BlogPage/>} />
            <Route path='/post/:id' element={<PostPage/>} />
            <Route path='/contact' element={<ContactPage/>} />
            <Route path='/my-account' element={<MyAccountPage/>} />
            <Route path='/reset-password' element={<ResetPasswordPage/>} />
            <Route path='/our-story' element={<OurStoryPage/>} />
            <Route path='/cart' element={<CartPage/>} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
