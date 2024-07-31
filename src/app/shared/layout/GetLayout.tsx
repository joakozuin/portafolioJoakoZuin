import Header from '@/app/components/Navbar/header'
import Networks from '@/app/components/networks/Networks'
import Experiencia from '@/app/components/Presentation/experiencia'
import Presentation from '@/app/components/Presentation/Presentation'
import CardsVideo from '@/app/components/video/cardsVideo'
import Footer from '@/app/components/Footer/footer'
import React from 'react'

const GetLayout = () => {
  return (
    <>
      <Header />
      <Presentation />
      <Experiencia/>
      <CardsVideo/>
      <Networks/>
      <Footer />

    </>
  )
}

export default GetLayout
