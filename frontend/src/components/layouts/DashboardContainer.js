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
import EditExperience from '../pages/Experience/EditExperience';
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
import RenderResume from '../pages/Home/RenderResume';
import { Container } from 'react-bootstrap';
import {
  FaHouseDamage, FaInfo, FaUser, FaBullseye, FaUniversity, FaBuilding, FaTools,
  FaGlobe, FaAward, FaEnvelopeOpenText, FaIdCard, FaHome
} from 'react-icons/fa';
import PrivateRoute from './PrivateRoute';


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
            <PrivateRoute path='/' exact component={Home} />
            <PrivateRoute path='/basic-information' exact component={BasicInformation} />
            <PrivateRoute path='/profile' exact component={Profile} />
            <PrivateRoute path='/job-objective' exact component={JobObjective} />
            <PrivateRoute path='/education' exact component={Education} />
            <PrivateRoute path='/experience' exact component={Experience} />
            <PrivateRoute path='/experience/add' exact component={AddExperience} />
            <PrivateRoute path='/experience/edit/:id' exact component={EditExperience} />
            <PrivateRoute path='/skill' exact component={Skill} />
            <PrivateRoute path='/language' exact component={Language} />
            <PrivateRoute path='/language/add' exact component={AddLanguage} />
            <PrivateRoute path='/language/edit/:id' component={EditLanguage} />
            <PrivateRoute path='/award' exact component={Award} />
            <PrivateRoute path='/cover-letter' exact component={CoverLetters} />
            <PrivateRoute path='/cover-letter/add' exact component={AddCoverLetter} />
            <PrivateRoute path='/contact-me' exact component={ContactMe} />
            <PrivateRoute path='/resume/create' exact component={CreateResume} />
            <PrivateRoute path='/resume/render' exact component={RenderResume} />
          </main>
        </Row>
      </Container>
    </div>
  );
}

export default DashboardContainer;
