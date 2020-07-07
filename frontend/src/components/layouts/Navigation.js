import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import BasicInformation from '../pages/BasicInformation';
import JobObjective from '../pages/JobObjective';
import Education from '../pages/Education/Education';
import Experience from '../pages/Experience';
import AddExperience from '../pages/AddExperience';
import Skill from '../pages/Skill';
import Language from '../pages/Language';
import Award from '../pages/Award';
import CoverLetters from '../pages/CoverLetters';
import AddCoverLetter from '../pages/AddCoverLetter';
import ContactMe from '../pages/ContactMe';
import PageNotFound from '../pages/PageNotFound';


function Navigation() {
  return (
    <BrowserRouter>
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
        <div className="sidebar-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink exact to='/' className='nav-link'>Home</NavLink>
            </li>
            <li>
              <NavLink exact to='/basic-information' className='nav-link'>Basic Information</NavLink>
            </li>
            <li>
              <NavLink exact to='/profile' className='nav-link'>Profile</NavLink>
            </li>
            <li>
              <NavLink exact to='/job-objective' className='nav-link'>JobObjective</NavLink>
            </li>
            <li>
              <NavLink exact to='/education' className='nav-link'>Education</NavLink>
            </li>
            <li>
              <NavLink exact to='/experience' className='nav-link'>Experience</NavLink>
            </li>
            <li>
              <NavLink exact to='/skill' className='nav-link'>Skill</NavLink>
            </li>
            <li>
              <NavLink exact to='/language' className='nav-link'>Language</NavLink>
            </li>
            <li>
              <NavLink exact to='/award' className='nav-link'>Award</NavLink>
            </li>
            <li>
              <NavLink exact to='/cover-letter' className='nav-link'>Cover Letters</NavLink>
            </li>
            <li>
              <NavLink exact to='/contact-me' className='nav-link'>Contact Me</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-md-4'>
        <Switch>
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
          <Route component={PageNotFound} />
        </Switch>
      </main>
    </BrowserRouter>

  );
}

export default Navigation;
