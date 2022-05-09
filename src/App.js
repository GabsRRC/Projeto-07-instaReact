import "./reset.css";
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
