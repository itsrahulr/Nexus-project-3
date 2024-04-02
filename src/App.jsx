import "./App.css";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Fullcontact from "./components/Fullcontact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Touch from "./components/Touch";
import Video from "./components/Video";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Video />
      <About />
      <Services />
      <Works />
      <Clients />
      <Touch />
      {/* <Form /> */}
      {/* <Contact /> */}
      <Fullcontact />
      <Footer />
    </>
  );
}

export default App;
