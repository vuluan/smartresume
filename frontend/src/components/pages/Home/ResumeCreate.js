import React, { useState, useEffect } from 'react'
import Breadcrumbs from '../../layouts/Breadcrumbs';
import Select from 'react-select'
import axios, { HOST } from '../../../utils/httpUtilities';
import LocalStorageService from './../../../utils/localStorage';
import * as experienceServices from './../../../services/experienceServices';
import * as projectServices from './../../../services/projectServices';
import * as languageServices from './../../../services/languageServices';
import { Button } from 'react-bootstrap';

function ResumeCreate(props) {
    let BASE_URL = HOST;

    const [resume, setResume] = useState({});

    let resumeId = props.location.resumeId

    const [profile, setProfile] = useState([]);
    const [objective, setObjective] = useState([]);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [projects, setProjects] = useState([]);
    const [initValues, setInitValues] = useState({});

    useEffect(() => {
        getResume();
        getEducationList();
        getExperienceList();
        getSkillsList();
        getLanguagesList();
        getAwardsList();
        getProfileList();
        getObjectiveList();
        getProjectList();
    }, [])

    useEffect(() => {
        titleDescDefaults();
        profDefaults();
        eduDefaults();
        objDefaults();
        experienceDefaults();
        projectDefaults();
        skillsDefaults();
        langDefaults();

    }, [resume])

    const getResume = () => {
        if (resumeId) {
            axios.get(`${BASE_URL}/resume/${resumeId}`).then((response) => {
                setResume(response.data.data);
            }).then(() => {
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    const titleDescDefaults = () => {
        setInitValues((prevState, props) => ({
            ...prevState,
            title: resume.title,
            description: resume.description
        }));
    }

    const profDefaults = () => {
        console.log("Resume:" + JSON.stringify(resume));
        if (resume.profile) {
            let values = { value: resume.profile._id, label: `${resume.profile.profile}` }
            console.log(`Default Values: ${JSON.stringify(values)}`);
            setInitValues((prevState, props) => ({
                ...prevState,
                profile: values
            }));
        }
    }

    const objDefaults = () => {
        if (resume.objective) {
            let values = { value: resume.objective._id, label: `${resume.objective.objective}` }

            console.log(`Default Values: ${JSON.stringify(values)}`);
            setInitValues((prevState, props) => ({
                ...prevState,
                objective: values
            }));
        }
    }

    const eduDefaults = () => {
        console.log("Resume:" + JSON.stringify(resume));
        if (resume.education) {
            let values = resume.education.map((adu) => {
                return { value: adu._id, label: `${adu.school} ${adu.degree} ${adu.field} ${adu.start} : ${adu.finish}` }
            })
            console.log(`Default Values: ${values}`);
            setInitValues((prevState, props) => ({
                ...prevState,
                education: values
            }));
        }
    }

    const experienceDefaults = () => {

        if (resume.experience) {
            let values = resume.experience.map((adu) => {
                return { value: adu._id, label: `${adu.company} : ${adu.title}` }
            })

            setInitValues((prevState, props) => ({
                ...prevState,
                experience: values
            }));
        }
    }

    const projectDefaults = () => {
        if (resume.projects) {
            let values = resume.projects.map((adu) => {
                return { value: adu._id, label: `${adu.name} : ${adu.description}` }
            })
            setInitValues((prevState, props) => ({
                ...prevState,
                projects: values
            }));
        }
    }

    const skillsDefaults = () => {
        if (resume.skills) {
            let values = resume.skills.map((adu) => {
                return { value: adu._id, label: `${adu.skill_name} Hard Skill: ${adu.is_hard_skill}` }
            })
            setInitValues((prevState, props) => ({
                ...prevState,
                skills: values
            }));
        }
    }

    const langDefaults = () => {
        if (resume.languages) {
            let values = resume.languages.map((adu) => {
                return { value: adu._id, label: `${adu.language} : ${adu.proficiency}` }
            })
            setInitValues((prevState, props) => ({
                ...prevState,
                languages: values
            }));
        }
    }

    const getProfileList = () => {
        let userId = LocalStorageService.getUserInfo().userId;
        axios.get(`${BASE_URL}/jobprofile/list/${userId}`).then((response) => {
            setProfile(response.data.data.map((adu) => {
                return { value: adu._id, label: `${adu.profile}` }
            })
            );
        });
    }

    const getObjectiveList = () => {
        let userId = LocalStorageService.getUserInfo().userId;
        axios.get(`${BASE_URL}/objective/list/${userId}`).then((response) => {
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

        languageServices.getAllLanguages(payload).then(res => {
            if (res.status == 200) {
                setLanguages(res.data.data.map((lan) => {
                    return { value: lan._id, label: `${lan.language} : ${lan.proficiency}` }
                })
                );
            }
        });
    }

    const getProjectList = () => {
        const userInfo = LocalStorageService.getUserInfo();
        const payload = { userId: userInfo.userId };

        projectServices.getAllProjects(payload).then(res => {
            // console.log(JSON.stringify(res));
            if (res.status === 200) {
                setProjects(res.data.data.map((lan) => {
                    return { value: lan._id, label: `${lan.name} : ${lan.description}` }
                })
                );
            }
        });
    }

    useEffect(() => {
        //console.log(JSON.stringify(resume));
    }, [resume])

    const getAwardsList = () => {

    }

    const eduChanged = (value) => {

        let e = (value) ? value.map((edu) => { return edu.value }) : []
        setResume((prevState, props) => ({
            ...prevState,
            education: e
        }));
    }

    const expChanged = (value) => {
        let e = (value) ? value.map((exp) => { return exp.value }) : []
        setResume((prevState, props) => ({
            ...prevState,
            experience: e
        }));
    }

    const profileChanged = (value) => {
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
        setResume((prevState, props) => ({
            ...prevState,
            objective: value.value
        }));
    }

    const skillChanged = (value) => {
        let e = (value) ? value.map((exp) => { return exp.value }) : []
        setResume((prevState, props) => ({
            ...prevState,
            skills: e
        }));
    }

    const projectChanged = (value) => {
        let e = (value) ? value.map((exp) => { return exp.value }) : []
        setResume((prevState, props) => ({
            ...prevState,
            projects: e
        }));
    }

    const languageChanged = (value) => {
        let e = (value) ? value.map((exp) => { return exp.value }) : []
        setResume((prevState, props) => ({
            ...prevState,
            languages: e
        }));
    }

    const handleSave = () => {
        if (resumeId) {
            //Update
            console.log('Update');
            resume.user_id = LocalStorageService.getUserInfo().userId;
            resume.id = resumeId;
            axios.put(`${BASE_URL}/resume`, resume).then((response) => {
            }).catch((error) => {
                console.log(error);
            });
        } else {
            //Save New
            console.log('Save New');
            resume.user_id = LocalStorageService.getUserInfo().userId;
            axios.post(`${BASE_URL}/resume/add`, resume).then((response) => {
            }).catch((error) => {
                console.log(error);
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

    if ((resume && Object.keys(initValues).length && initValues.profile) || !resumeId) {
        console.log("Init Values: " + JSON.stringify(initValues));
        console.log("Resume ID: " + resumeId);
        return (
            <div>
                <Breadcrumbs links={breadcrumbLinks} />
                <h1>Create New Resume</h1>

                <label htmlFor="title">Title</label>
                <input
                    value={resume.title}
                    onChange={titleChanged}
                    className='form-control'
                    type='text'
                    id='title'
                />

                <label htmlFor="description">Description</label>
                <input
                    value={resume.description}
                    onChange={descriptionChanged}
                    className='form-control'
                    type='text'
                    id='description'
                />

                <label htmlFor="prof">Profile</label>
                <Select options={profile}
                    defaultValue={initValues.profile}
                    onChange={profileChanged}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    id='prof'
                />

                <label htmlFor="obj">Objective</label>
                <Select options={objective}
                    defaultValue={initValues.objective}
                    onChange={objectiveChanged}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    id='obj'
                />
                <label htmlFor="exp">Experience</label>
                <Select isMulti options={experience}
                    defaultValue={initValues.experience}
                    onChange={expChanged}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    id='exp'
                />
                <label htmlFor="projects">Projects</label>
                <Select isMulti options={projects}
                    defaultValue={initValues.projects}
                    onChange={projectChanged}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    id='projects'
                />
                <label htmlFor="edu">Education</label>
                <Select isMulti options={education}
                    defaultValue={initValues.education}
                    onChange={eduChanged}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    id='edu'
                />

                <label htmlFor="skills">Skills</label>
                <Select isMulti options={skills}
                    defaultValue={initValues.skills}
                    onChange={skillChanged}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    id='skills'
                />
                <label htmlFor="lan">Language</label>
                <Select isMulti options={languages}
                    defaultValue={initValues.languages}
                    onChange={languageChanged}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    id='lan'
                />

                <Button className='btn btn-success float-right' onClick={handleSave}>Save</Button>
            </div>
        )
    } else {
        return (<div>Loading..</div>)
    }
}

export default ResumeCreate
