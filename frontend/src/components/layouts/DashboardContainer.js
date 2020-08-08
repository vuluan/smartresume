import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import BasicInformation from '../pages/BasicInformation';
import JobObjective from '../pages/JobObjective/JobObjective';
import Education from '../pages/Education/Education';
import Experience from '../pages/Experience/Experience';
import AddExperience from '../pages/Experience/AddExperience';
import Skill from '../pages/Skill';
import Language from '../pages/Language/Language';
import AddLanguage from '../pages/Language/AddLanguage';
import EditLanguage from '../pages/Language/EditLanguage';
import Award from '../pages/Award';
import CoverLetters from '../pages/CoverLetters';
import AddCoverLetter from '../pages/AddCoverLetter';
import ContactMe from '../pages/ContactMe';
import Header from './Header';
import CreateResume from '../pages/Home/ResumeCreate';
import { Container } from 'react-bootstrap';
import {
  FaHouseDamage, FaInfo, FaUser, FaBullseye, FaUniversity, FaBuilding, FaTools,
  FaGlobe, FaAward, FaEnvelopeOpenText, FaIdCard, FaHome
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
                <li>
                  <NavLink exact to='/' className='nav-link'><i><FaHome /></i>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/basic-information' className='nav-link'><i><FaInfo /></i>Basic Information</NavLink>
                </li>
                <li>
                  <NavLink to='/profile' className='nav-link'><i><FaUser /></i>Profile</NavLink>
                </li>
                <li>
                  <NavLink to='/job-objective' className='nav-link'><i><FaBullseye /></i>Job Objective</NavLink>
                </li>
                <li>
                  <NavLink to='/education' className='nav-link'><i><FaUniversity /></i>Education</NavLink>
                </li>
                <li>
                  <NavLink to='/experience' className='nav-link'><i><FaBuilding /></i>Experience</NavLink>
                </li>
                <li>
                  <NavLink to='/skill' className='nav-link'><i><FaTools /></i>Skill</NavLink>
                </li>
                <li>
                  <NavLink to='/language' className='nav-link'><i><FaGlobe /></i>Language</NavLink>
                </li>
                <li>
                  <NavLink to='/award' className='nav-link'><i><FaAward /></i>Award</NavLink>
                </li>
                <li>
                  <NavLink to='/cover-letter' className='nav-link'><i><FaEnvelopeOpenText /></i>Cover Letters</NavLink>
                </li>
                <li>
                  <NavLink to='/contact-me' className='nav-link'><i><FaIdCard /></i>Contact Me</NavLink>
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
            <Route path='/language/add' exact component={AddLanguage} />
            <Route path='/language/edit/:id' component={EditLanguage} />
            <Route path='/award' exact component={Award} />
            <Route path='/cover-letter' exact component={CoverLetters} />
            <Route path='/cover-letter/add' exact component={AddCoverLetter} />
            <Route path='/contact-me' exact component={ContactMe} />
            <Route path='/resume/create' exact component={CreateResume} />
          </main>
        </Row>
      </Container>
    </div>
  );
}

export default DashboardContainer;
