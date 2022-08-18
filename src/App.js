import { NavBar, Banner, Skills, Projects, Footer } from './components/index';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
