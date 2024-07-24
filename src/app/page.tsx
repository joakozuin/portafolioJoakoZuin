"use client";


import Footer from "./components/Footer/footer";
import Header from "./components/Navbar/header";
import Experiencia from "./components/Presentation/experiencia";
import Presentation from "./components/Presentation/Presentation";
import CardsVideo from "./components/video/cardsVideo"
import Networks from './components/networks/Networks'

export default function Home() {
  return (
    <>
      <Header />

      <Presentation />

      <Experiencia/>

      <CardsVideo/>

      <Networks/>

      <Footer />
    </>
  );
}
