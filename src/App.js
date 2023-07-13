import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <div className="Box">
        <Header />
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
