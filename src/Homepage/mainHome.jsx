import Navbar from "./Navbar..jsx";
import Hero from "./Hero.jsx";
import Phases from "./Phases.jsx";
import Footer from "./Footer.jsx";
import Choice from "./Choice.jsx";

const MainHome = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <Phases />
         <Choice />
      </main>

      <Footer />
    </div>
  );
};

export default MainHome;