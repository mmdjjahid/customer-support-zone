import "./App.css";
import NavBar from "./component/nav/nav";
import FooterComponent from "./component/footer/footer";
import MainSection from "./component/MainSection/MainSection";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <MainSection></MainSection>
      <FooterComponent></FooterComponent>
      <ToastContainer />
    </>
  );
}

export default App;
