import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import ProductListPage_All from "./pages/ProductListPage_All";
// import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <div className="Box">
        <Header />
        {/* <MainPage /> */}
        <ProductListPage_All/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
