import React, { useState, useEffect } from 'react'
import Breadcrumbs from '../../layouts/Breadcrumbs';
import Select from 'react-select'
import axios, { HOST } from '../../../utils/httpUtilities';
import LocalStorageService from './../../../utils/localStorage';

function ResumeCreate() {
    let BASE_URL = 'https://smartresumebuild.herokuapp.com/api';

    const [education, setEducation] = useState([]);
    const [experience, setexperience] = useState([]);

    useEffect(() => {
        getEducationList();
    }, [])

    const getEducationList = () => {
        let userId = LocalStorageService.getUserInfo().userId;
        axios.get(`${BASE_URL}/education/list/${userId}`).then((response) => {
            setEducation(response.data.data.map((adu) => {
                return { value: adu._id, label: `${adu.school} ${adu.degree} ${adu.field} ${adu.start} : ${adu.finish}` }
            })
            );
        });
    }

    const getExList = () => {
        experienceServices.getAllExperiences(payload)
            .then(res => {
                if (res.status == 200) {
                    console.log(res.data);
                    setEExperience(response.data.data.map((adu) => {
                        return { value: adu._id, label: `${adu.school} ${adu.degree} ${adu.field} ${adu.start} : ${adu.finish}` }
                    })
                    );
                }
            })
            .catch((error) => {
                console.log('onLoadData ' + error);
            });
    }
}


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

        <label htmlFor="edu">Education</label>
        <Select isMulti options={education}
            className="basic-multi-select"
            classNamePrefix="select"
            id='edu'
        />

    </div>
)
}

export default ResumeCreate
