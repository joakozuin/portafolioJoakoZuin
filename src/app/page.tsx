
import Footer from "./components/Footer/footer";
import Header from "./components/Navbar/header";
import Experiencia from "./components/Presentation/experiencia";
import Presentation from "./components/Presentation/Presentation";


export default function Home() {
  return (
    <>
      <Header />

      <Presentation />

      <Experiencia/>

      <Footer />
    </>
  );
}
