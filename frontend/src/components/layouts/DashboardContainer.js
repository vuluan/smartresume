import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import Home from '../pages/Home';
import Profile from '../pages/Profile/Profile';
import BasicInformation from '../pages/BasicInformation';
import JobObjective from '../pages/JobObjective/JobObjective';
import Education from '../pages/Education/Education';
import Experience from '../pages/Experience';
import AddExperience from '../pages/AddExperience';
import Skill from '../pages/Skill';
import Language from '../pages/Language';
import Award from '../pages/Award';
import CoverLetters from '../pages/CoverLetters';
import AddCoverLetter from '../pages/AddCoverLetter';
import ContactMe from '../pages/ContactMe';
import Header from './Header';
import { Container } from 'react-bootstrap';
import {
  FaHouseDamage, FaInfo, FaUser, FaBullseye, FaUniversity, FaBuilding, FaTools,
  FaGlobe, FaAward, FaEnvelopeOpenText, FaIdCard
} from 'react-icons/fa';


function DashboardContainer() {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="text-center">
                  <NavLink exact to='/' className='nav-link'><i><FaHouseDamage /></i><br />Home</NavLink>
                </li>
                <li className="text-center">
                  <NavLink exact to='/basic-information' className='nav-link'><i><FaInfo /></i><br />Basic Information</NavLink>
                </li>
                <li className="text-center">
                  <NavLink exact to='/profile' className='nav-link'><i><FaUser /></i><br />Profile</NavLink>
                </li>
                <li className="text-center">
                  <NavLink exact to='/job-objective' className='nav-link'><i><FaBullseye /></i><br />Job Objective</NavLink>
                </li>
                <li className="text-center">
                  <NavLink exact to='/education' className='nav-link'><i><FaUniversity /></i><br />Education</NavLink>
                </li>
                <li className="text-center">
                  <NavLink exact to='/experience' className='nav-link'><i><FaBuilding /></i><br />Experience</NavLink>
                </li>
                <li className="text-center">
                  <NavLink exact to='/skill' className='nav-link'><i><FaTools /></i><br />Skill</NavLink>
                </li>
                <li className="text-center">
                  <NavLink exact to='/language' className='nav-link'><i><FaGlobe /></i><br />Language</NavLink>
                </li>
                <li className="text-center">
                  <NavLink exact to='/award' className='nav-link'><i><FaAward /></i><br />Award</NavLink>
                </li>
                <li className="text-center">
                  <NavLink exact to='/cover-letter' className='nav-link'><i><FaEnvelopeOpenText /></i><br />Cover Letters</NavLink>
                </li>
                <li className="text-center">
                  <NavLink exact to='/contact-me' className='nav-link'><i><FaIdCard /></i><br />Contact Me</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-md-4'>
            <Route path='/' exact component={Home} />
            <Route path='/basic-information' exact component={BasicInformation} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/job-objective' exact component={JobObjective} />
            <Route path='/education' exact component={Education} />
            <Route path='/experience' exact component={Experience} />
            <Route path='/experience/add' exact component={AddExperience} />
            <Route path='/skill' exact component={Skill} />
            <Route path='/language' exact component={Language} />
            <Route path='/award' exact component={Award} />
            <Route path='/cover-letter' exact component={CoverLetters} />
            <Route path='/cover-letter/add' exact component={AddCoverLetter} />
            <Route path='/contact-me' exact component={ContactMe} />
          </main>
        </Row>
      </Container>
    </div>
  );
}

export default DashboardContainer;
