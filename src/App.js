import AboutSection from './components/aboutSection/AboutSection.js'
import Slider from './components/slider/Slider.js'


function App() {
  return (
    <div className="m-0 flex w-screen box-border flex-col">
      <Slider />
      <AboutSection />
    </div>
  );
}

export default App;
