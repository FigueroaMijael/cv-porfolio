import React from 'react'

import Header from '../../components/Header/Header';
import ParticlesBackground from '../../components/ParticlesBackground/ParticlesBackground';
import Content from '../../components/Content/Content'
import Main from '../../components/Main';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>

      <Header />

      <ParticlesBackground />

      <Content />

      <Main />

      <ScrollToTop />

      <Footer />

    </div>
  )
}

export default Home