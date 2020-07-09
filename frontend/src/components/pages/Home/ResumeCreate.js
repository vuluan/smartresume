import React from 'react'
import Breadcrumbs from '../../layouts/Breadcrumbs';

function ResumeCreate() {
    const breadcrumbLinks = [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Create Resume',
            path: '/resume/create',
            active: true
        }
    ];

    return (
        <div>
            <Breadcrumbs links={breadcrumbLinks} />
            <h1>Create New Resume</h1>
        </div>
    )
}

export default ResumeCreate
