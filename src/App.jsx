import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
import NavBar from "./components/navbar";
import Hero from "./components/Hero";
gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="h-dvh"></div>
    </>
  );
}

export default App;
