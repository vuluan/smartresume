import React, { useState, useEffect } from 'react'
import Breadcrumbs from '../../layouts/Breadcrumbs';
import Select from 'react-select'
import axios, { HOST } from '../../../utils/httpUtilities';
import LocalStorageService from './../../../utils/localStorage';
import * as experienceServices from './../../../services/experienceServices';
import * as languageServices from './../../../services/languageServices';
import { Button } from 'react-bootstrap';

function ResumeCreate() {
    let BASE_URL = HOST;

    const [resume, setResume] = useState({
        user_id: LocalStorageService.getUserInfo().userId,
        title: 'Test Title',
        description: 'Test description'
    });

    const [profile, setProfile] = useState([]);
    const [objective, setObjective] = useState([]);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [awards, setAwards] = useState([]);

    useEffect(() => {
        getEducationList();
        getExperienceList();

        getSkillsList();
        getLanguagesList();
        getAwardsList();
        getProfileList();
        getObjectiveList()
    }, [])

    const getProfileList = () => {
        let userId = LocalStorageService.getUserInfo().userId;
        axios.get(`${BASE_URL}/jobprofile/list/${userId}`).then((response) => {
            console.log(response);
            setProfile(response.data.data.map((adu) => {
                return { value: adu._id, label: `${adu.profile}` }
            })
            );
        });
    }

    const getObjectiveList = () => {
        let userId = LocalStorageService.getUserInfo().userId;
        axios.get(`${BASE_URL}/objective/list/${userId}`).then((response) => {
            console.log(response);
            setObjective(response.data.data.map((adu) => {
                return { value: adu._id, label: `${adu.objective}` }
            })
            );
        });
    }

    const getEducationList = () => {
        let userId = LocalStorageService.getUserInfo().userId;
        axios.get(`${BASE_URL}/education/list/${userId}`).then((response) => {
            setEducation(response.data.data.map((adu) => {
                return { value: adu._id, label: `${adu.school} ${adu.degree} ${adu.field} ${adu.start} : ${adu.finish}` }
            })
            );
        });
    }

    const getExperienceList = () => {
        const userInfo = LocalStorageService.getUserInfo();
        const payload = { userId: userInfo.userId };
        experienceServices.getAllExperiences(payload)
            .then(res => {
                if (res.status == 200) {
                    console.log(res.data);
                    setExperience(res.data.data.map((exp) => {
                        return { value: exp._id, label: `${exp.company} : ${exp.title}` }
                    })
                    );
                }
            })
            .catch((error) => {
                console.log('onLoadData ' + error);
            });
    }


    const getSkillsList = () => {
        let userId = LocalStorageService.getUserInfo().userId;
        axios.get(`${BASE_URL}/skill/list/${userId}`).then((response) => {
            setSkills(response.data.data.map((adu) => {
                return { value: adu._id, label: `${adu.skill_name} Hard Skill: ${adu.is_hard_skill}` }
            })
            );
        });
    }

    const getLanguagesList = () => {
        const userInfo = LocalStorageService.getUserInfo();
        const payload = { userId: userInfo.userId };
        console.log(userInfo.userId);

        languageServices.getAllLanguages(payload).then(res => {
            if (res.status == 200) {
                console.log(`Language: ${JSON.stringify(res.data)}`);
                setLanguages(res.data.data.map((lan) => {
                    return { value: lan._id, label: `${lan.language} : ${lan.proficiency}` }
                })
                );
            }
        });
    }

    useEffect(() => {

        console.log(JSON.stringify(resume));
    }, [resume])

    const getAwardsList = () => {

    }

    const eduChanged = (value) => {
        //console.log(value);

        let e = value.map((edu) => { return edu.value })
        setResume((prevState, props) => ({
            ...prevState,
            education: e
        }));
    }

    const expChanged = (value) => {
        //console.log(value);
        let e = value.map((exp) => { return exp.value })
        setResume((prevState, props) => ({
            ...prevState,
            experience: e
        }));
    }

    const profileChanged = (value) => {
        //  console.log(value);

        setResume((prevState, props) => ({
            ...prevState,
            profile: value.value
        }));
    }

    const titleChanged = (e) => {
        let title = e.target.value
        if (e.target !== null) {
            setResume((prevState, props) => ({
                ...prevState,
                title: title
            }));
        }

    }

    const descriptionChanged = (e) => {
        let description = e.target.value

        setResume((prevState, props) => ({
            ...prevState,
            description: description
        }));
    }

    const objectiveChanged = (value) => {
        //console.log(value);

        setResume((prevState, props) => ({
            ...prevState,
            objective: value.value
        }));
    }
    //skillChanged
    const skillChanged = (value) => {
        // console.log(value);
        let e = value.map((exp) => { return exp.value })
        setResume((prevState, props) => ({
            ...prevState,
            skills: e
        }));
    }

    const languageChanged = (value) => {
        // console.log(value);
        let e = value.map((exp) => { return exp.value })
        setResume((prevState, props) => ({
            ...prevState,
            languages: e
        }));
    }

    const handleSave = () => {
        // console.log('Handle Save');
        resume.user_id = LocalStorageService.getUserInfo().userId;

        axios.post(`${BASE_URL}/resume/add`, resume).then((response) => {

            console.log('Sent Resume');
        }).catch((error) => {
            console.log(error);
        });
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

            <label htmlFor="title">Title</label>
            <input
                onChange={titleChanged}
                className='form-control'
                type='text'
                id='title'
            />

            <label htmlFor="description">Description</label>
            <input
                onChange={descriptionChanged}
                className='form-control'
                type='text'
                id='description'
            />

            <label htmlFor="prof">Profile</label>
            <Select options={profile}
                onChange={profileChanged}
                className="basic-multi-select"
                classNamePrefix="select"
                id='prof'
            />

            <label htmlFor="obj">Objective</label>
            <Select options={objective}
                onChange={objectiveChanged}
                className="basic-multi-select"
                classNamePrefix="select"
                id='obj'
            />
            <label htmlFor="exp">Experience</label>
            <Select isMulti options={experience}
                onChange={expChanged}
                className="basic-multi-select"
                classNamePrefix="select"
                id='exp'
            />
            <label htmlFor="edu">Education</label>
            <Select isMulti options={education}
                onChange={eduChanged}
                className="basic-multi-select"
                classNamePrefix="select"
                id='edu'
            />

            <label htmlFor="skills">Skills</label>
            <Select isMulti options={skills}
                onChange={skillChanged}
                className="basic-multi-select"
                classNamePrefix="select"
                id='skills'
            />
            <label htmlFor="lan">Language</label>
            <Select isMulti options={languages}
                onChange={languageChanged}
                className="basic-multi-select"
                classNamePrefix="select"
                id='lan'
            />
            <label htmlFor="awards">Awards</label>
            <Select isMulti options={awards}
                className="basic-multi-select"
                classNamePrefix="select"
                id='awards'
            />
            <Button className='btn btn-success float-right' onClick={handleSave}>Save</Button>
        </div>
    )
}

export default ResumeCreate
