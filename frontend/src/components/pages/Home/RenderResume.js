import React, { useState, useEffect } from 'react'
import moment from 'moment';
import axios, { HOST } from '../../../utils/httpUtilities';
import LocalStorageService from './../../../utils/localStorage';
import './Resume.css';
function RenderResume(props) {
    let BASE_URL = HOST;

    let resumeId = props.location.resumeId

    //console.log(`RESUME: ${JSON.stringify(props)}`);

    const [resume, setResume] = useState();
    const [basicInfo, setBasicInfo] = useState();

    useEffect(() => {
        getResume();
        getBasicInfo();
    }, [])

    useEffect(() => {
        //console.log(JSON.stringify(resume));
    }, [resume])


    const getBasicInfo = () => {
        let userId = LocalStorageService.getUserInfo().userId;
        axios.get(`${HOST}/basicinfo/list/${userId}`)
            .then(function (response) {
                // console.log('response', response.data.data);
                setBasicInfo(response.data.data);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    const getResume = () => {

        axios.get(`${BASE_URL}/resume/${resumeId}`).then((response) => {
            console.log(JSON.stringify(response.data.data));
            setResume(response.data.data);
        });
    }

    if (resume && basicInfo) {
        //  console.log(JSON.stringify(basicInfo[0].firstName));
        let info = basicInfo[0];

        return (
            <div>
                <div className='basic_info'>
                    <h1 className='cap'>{info.firstName} {info.lastName}</h1>
                    <h6 className='cap'>{info.email} {info.phone}</h6>
                    <h6 className='cap'>{info.address}, {info.region} {info.country}</h6>
                    <h6 ><a href={`http://${info.gitHub}`} target="_blank"> {info.gitHub} </a>  |<a href={`http://${info.linkedin}`} target="_blank"> {info.linkedin} </a></h6>
                    <h6></h6>
                </div>
                <hr />
                <div className='profile'>
                    <h6>Profile</h6>
                    <div>{resume.profile.profile}</div>
                </div>
                <hr />
                <div className='objective'>
                    <h6>Objective</h6>
                    <div>{resume.objective.objective}</div>
                </div>
                <hr />
                <h6>Experience</h6>
                {resume.experience.map((edu) => {
                    return (
                        <div className='experience'>
                            <strong>{edu.title} ({edu.type}),  {edu.company} {moment(edu.start_date).format("LL")} - {moment(edu.end_date).format("LL")}</strong>
                            <div>{edu.description}</div>
                        </div>
                    )
                })}
                <hr />

                <h6>Projects</h6>
                {resume.projects.map((edu) => {
                    return (
                        <div className='projects'>
                            <strong>{edu.name}</strong>
                            <div>{edu.description}</div>
                        </div>
                    )
                })}
                <hr />
                <h6>Education</h6>
                {resume.education.map((edu) => {
                    return (
                        <div className='education'>
                            <strong>{edu.school}, {edu.start} - {edu.finish}</strong>
                            <div>{edu.degree}</div>
                            <div>{edu.field}</div>
                        </div>
                    )
                })}

                <hr />
                <h6>Hard Skills</h6>
                <div className='skills'>
                    {resume.skills.map(skill => (skill.is_hard_skill) ? skill.skill_name : '').join(', ')}
                </div>
                <hr />
                <h6>Soft Skills</h6>
                <div className='skills'>
                    {resume.skills.map(skill => (!skill.is_hard_skill) ? skill.skill_name : '').join(', ')}
                </div>
                <hr />
                <h6>Languages</h6>
                <div className='languages'>
                    {resume.languages.map(lang => `${lang.language} : ${lang.proficiency}`).join(', ')}
                </div>


            </div >
        )
    } else {
        return (
            <div>
                <h3>Loading</h3>
            </div>
        )
    }

}

export default RenderResume
