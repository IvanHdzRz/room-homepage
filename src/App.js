import AboutSection from './components/aboutSection/AboutSection.js'
import NavBar from './components/navBar/NavBar.js';
import Slider from './components/slider/Slider.js'


function App() {
  return (
    <div className="w-screen flex flex-col overflow-x-hidden relative m-0 ">
      <NavBar />
      <Slider />
      <AboutSection />
    </div>
  );
}

export default App;
