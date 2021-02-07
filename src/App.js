import AboutSection from './components/aboutSection/AboutSection.js'
import NavBar from './components/navBar/NavBar.js';
import Slider from './components/slider/Slider.js'


function App() {
  return (
    <div className="relative m-0 flex w-screen box-border flex-col overflow-x-hidden	">
      <NavBar />
      <Slider />
      <AboutSection />
    </div>
  );
}

export default App;
