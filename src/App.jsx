import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

export default function App() {
    return (
        <div className="main">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}
