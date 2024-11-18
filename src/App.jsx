import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import UnsubscribeConfirmation from './Components/UnsubscribeConfirmation/UnsubscribeConfirmation';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Main route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className='container'>
                  {/* Uncomment other components if needed */}
                  {/* <Title subTitle='Our PROGRAM' title='What We Offer'/>
                  <Programs/>
                  <About/>
                  <Title subTitle='Gallery' title='Campus Photos'/>
                  <Campus/>
                  <Title subTitle='TESTIMONIALS' title='What Student Says'/>
                  <Testimonials/>
                  <Title subTitle='Contact Us' title='Get in Touch'/>
                  <Contact/> */}
                </div>
              </>
            }
          />

          {/* Unsubscribe confirmation route */}
          <Route path="/unsubscribed" element={<UnsubscribeConfirmation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App