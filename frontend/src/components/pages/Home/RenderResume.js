import React, { useState, useEffect } from 'react'
import axios, { HOST } from '../../../utils/httpUtilities';
import LocalStorageService from './../../../utils/localStorage';
import './Resume.css';
function RenderResume() {
    let BASE_URL = HOST;

    const [resume, setResume] = useState();
    const [basicInfo, setBasicInfo] = useState();
    useEffect(() => {
        getResume();
    }, [])

    useEffect(() => {
        // console.log(JSON.stringify(resume));
    }, [resume])

    useEffect(() => {
        getBasicInfo();
    }, []);

    const getBasicInfo = () => {
        let userId = LocalStorageService.getUserInfo().userId;
        axios.get(`${HOST}/basicinfo/list/${userId}`)
            .then(function (response) {
                console.log('response', response.data.data);
                setBasicInfo(response.data.data);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    const getResume = () => {
        let resumeId = '5f2fb0203c9d0f514c2908ca';

        axios.get(`${BASE_URL}/resume/${resumeId}`).then((response) => {
            setResume(response.data.data);
        });
    }

    if (resume) {
        return (
            <div>
                <div className='basic_info'>
                    <h1>Roman Mbwasi</h1>
                    <h6>test@example.com 555-5555-5555</h6>
                    <h6>12345 Humber Street, Ontario Canada</h6>
                    <h6></h6>
                </div>
                <hr />
                <div className='profile'>
                    <h4>Profile</h4>
                    <h6>Omnis et aliquid aperiam. Et et rerum temporibus animi. Eos qui recusandae illo.
                    Non omnis fugit dolores et sint sed molestiae magni. Qui temporibus cum beatae est consequatur facilis. Omnis aperiam officia et vero magnam saepe cupiditate mollitia. Omnis et aliquid aperiam. Et et rerum temporibus animi.
                    Eos qui recusandae illo. Non omnis fugit dolores et sint sed molestiae magni.
                    Qui temporibus cum beatae est consequatur facilis.
                    Omnis aperiam officia et vero magnam saepe cupiditate mollitia.</h6>
                </div>
                <div className='objective'>
                    <h4>Objective</h4>
                    <h6>Omnis et aliquid aperiam. Et et rerum temporibus animi. Eos qui recusandae illo.
                    Non omnis fugit dolores et sint sed molestiae magni. Qui temporibus cum beatae est consequatur facilis. Omnis aperiam officia et vero magnam saepe cupiditate mollitia. Omnis et aliquid aperiam. Et et rerum temporibus animi.
                    Eos qui recusandae illo. Non omnis fugit dolores et sint sed molestiae magni.
                    Qui temporibus cum beatae est consequatur facilis.
                    Omnis aperiam officia et vero magnam saepe cupiditate mollitia.</h6>
                </div>
                <div className='education'>
                    <h4>Education</h4>
                    <h5>Humber College, 2019 - 2020</h5>
                    <h6>Diploma</h6>
                    <h6>Information Technology Solutions</h6>
                </div>
                <div className='education'>
                    <h5>University of Toronto, 2020 - 2022</h5>
                    <h6>Masters</h6>
                    <h6>Computer Science</h6>
                </div>
            </div>
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
