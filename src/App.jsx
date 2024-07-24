import './App.css'
import Brand from './components/Brand/Brand';
import Categories from './components/Categories/Categories';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar'
import Questions from './components/Questions/Questions';
import TrustPilot from './components/TrustPilot/TrustPilot';
import Views from './components/Viewes/Views';

function App() {
  const items = ["Home", "Courses", "About us", "Works", "Blog", "Contact"];
  const legal = ["Terms of use", "Terms & conditions", "Privacy policy", "cookie policy"]
  return (
    <>
      <NavBar logoPartOne="Edu" logoPartTwo="jar" navItems={items} btn="Signup" />
      <Hero />
      <TrustPilot />
      <Categories />
      <Courses />
      <Questions />
      <Views />
      <Brand/>
      <Footer logoPartOne="Edu" logoPartTwo="jar" navItems={items} legal={legal}/>
    </>
  )
}

export default App
