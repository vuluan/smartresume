import React from 'react';
import Breadcrumbs from '../layouts/Breadcrumbs';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Experience',
    path: '/experience',
    active: true
  }
];

function Experience() {
  return (
    <div>
      <Breadcrumbs links={breadcrumbLinks} />
    </div>
  );
}

export default Experience;
