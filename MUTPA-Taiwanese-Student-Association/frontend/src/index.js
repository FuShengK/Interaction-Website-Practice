import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

// Components
// import Navbar from './components/navbar/Navbar';

// Pages
import App from './pages/home/App';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

import Secondhand from './pages/secondhand/Secondhand';
import CreateSales from './pages/secondhand/CreateSales';
import SubjectReview from './pages/subjectReview/SubjectReview';

import Extended from './pages/extended/extendPage/Extended';
import Private from './pages/extended/accomodation/Private';
import School from './pages/extended/accomodation/School';
import HomeInternet from './pages/extended/internet/HomeInternet';
import MobileInternet from './pages/extended/internet/MobileInternet';
import Restaurant from './pages/extended/restaurant/Restaurant';
import Transport from './pages/extended/transport/Transport';

import SignIn from './pages/signin/SignIn';

ReactDOM.render(
  <React.StrictMode>
    <Router>      
      <Routes>
        <Route path='/' element={<App />} exact/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        {/* Sign In & Sign Up */}
        <Route path='/signin' element={<SignIn />}/>

        {/* Extended Pages */}
        
        <Route path='/extended' element={<Extended />}/>
        <Route path='/extended/private' element={<Private />}/>
        <Route path='/extended/school' element={<School />}/>
        <Route path='/extended/homeinternet' element={<HomeInternet />}/>
        <Route path='/extended/mobileinternet' element={<MobileInternet />}/>  
        <Route path='/extended/restaurant' element={<Restaurant />}/>
        <Route path='/extended/transport' element={<Transport />}/> 

        {/* Secondhand Pages */}
        <Route path='/secondhand' element={<Secondhand />} />
        <Route path='/secondhand/create' element={<CreateSales />} />

        {/* Subject Reviews Pages */}
        <Route path='/subjectReview' element={<SubjectReview />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

