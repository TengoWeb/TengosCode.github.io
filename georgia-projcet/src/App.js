import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Footer } from './components/footer'
import { Landing } from './pages/landing';
import { SecondLanding } from './pages/secondlanding';
import { ThirdLanding } from './pages/thirdlanding';
import { FourthLanding } from './pages/fourthlanding'
import { ContactPage } from './pages/contactpage';
import { ReviewPage } from './pages/reviewPage';
import { Sectionfirst } from './sections/sectionfirst';
import { SectionSecond } from './sections/sectionsecond';
import { SectionThird } from './sections/sectionthird';
import { ScrollRevealComponent } from './components/scrollrevealcomponent';

function App() {
  const location = useLocation();
  const hiddenRoutes = ['/contactpage','/reviewpage'];
  const shouldHideSections = hiddenRoutes.includes(location.pathname);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/secondLanding" element={<SecondLanding />} />
        <Route path="/thirdlanding" element={<ThirdLanding />} />
        <Route path="/fourthlanding" element={<FourthLanding />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/reviewpage" element={<ReviewPage />} />
      </Routes>
      <ScrollRevealComponent>
        {!shouldHideSections && (
          <>
            <Sectionfirst />
            <SectionSecond />
            <SectionThird />
          </>
        )}
      </ScrollRevealComponent>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
