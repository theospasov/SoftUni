import Navigation from './components/Navigation'
import Header from './components/Header'
import EventInfo from './components/EventInfo';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navigation/>
  <Header/>
  <div className="container">
  <EventInfo/>
    {/* <!-- Start: Speakers --> */}
    <Speakers/>
    {/* <!-- End: Speakers --> */}
  </div>
  
  {/* <!-- Start: Tickets --> */}
  <Tickets/>
  {/* <!-- End: Tickets --> */}

  {/* <!-- Start: Schedule --> */}
  <Schedule/>
  {/* <!-- End: Schedule --> */}

  {/* <!-- Start: Footer --> */}
  <Footer/>
  {/* <!-- End: Footer --> */}
  </div>

  )
}

export default App;
