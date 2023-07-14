import "./App.css";
import Header from "./components/Header";
import ProductListPage_All from "./pages/ProductListPage_All";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <div className="Box">
        <Header />
        {/* <MainPage /> */}
        <ProductListPage_All/>
        
      </div>
    </div>
  );
}

export default App;



