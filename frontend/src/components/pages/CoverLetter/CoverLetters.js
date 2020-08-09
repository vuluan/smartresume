import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Pagination, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CoverLetter from './CoverLetter.js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import * as coverLetterServices from './../../../services/coverLetterServices';
import LocalStorageService from './../../../utils/localStorage';
import { useHistory } from 'react-router-dom';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Cover Letters',
    path: '/cover-letter',
    active: true
  }
];

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}



function CoverLetters() {

  const history = useHistory();
  const [messageVariant, setMessageVariant] = useState('danger');
  const [hasMessage, setHasMessage] = useState(false);
  const [messageInfo, setMessageInfo] = useState('');
  
  
  /* let config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibWljaGVsbGFuZXRAZ21haWwuY29tIiwiX2lkIjoiNWYyYjE4ZjhkMGE2MDYwMDE3MWFkODlkIn0sImlhdCI6MTU5Njc0MjAyN30.EozwN6Im9WJXYWe2p63JLFt7wymSQaWCG6_7yebcaTk',
    },
  }; */

  const formUpdate = function (letterData) {
    /* try {
      const response = axios.put(
        'http://smartresumebuild.herokuapp.com/api/coverletter',
        letterData,
        config
      );

      alert('Cover Letter Updated');
    } catch (e) {
      console.log(e.response.data.errors);
    } */

    
    const payload = { 
      user_id: userInfo.userId,
      id: letterData.id,
      title: letterData.title,
      body: letterData.body
  };
    coverLetterServices.updateCoverLetter(payload)
      .then(response => {
        console.log(response);
        setMessageVariant('success');
          setHasMessage(true);
          setMessageInfo('Update successful!');
      })
      .catch((error) => {
       // console.log(error.response.data.errors[0].msg);
          setMessageVariant('danger');
          setHasMessage(true);
          setMessageInfo(error.response.data.errors[0].msg);
      });
  }

  const formRemove = function (_id) {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure?.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            /* try {
              const response = axios.delete(
                'http://smartresumebuild.herokuapp.com/api/coverletter',
                { id: _id },
                config
              );
        
              alert('Cover Letter Deleted');
            } catch (e) {
              console.log(e.response.data.errors);
            } */

            coverLetterServices.deleteCoverLetter(_id).then(response => {
              console.log(response.data);

              const payload = { 
                userId: userInfo.userId
            };
        
              coverLetterServices.getAllCoverLetters(payload).then(res => {
                if (res.status === 200) {
                  setFormData(res.data.data);
                console.log(res.data.data);
                }
              });
            })
            .catch((error) => {
              console.log('Delete coverLetter: ' + error);
            });

          }
        },
        {
          label: 'No',
          onClick: () => {

          }
        }
      ]
    });
  }

  const [formData, setFormData] = useState([]);

  const userInfo = LocalStorageService.getUserInfo();
   

  useEffect(() => {
    /* axios.get('http://smartresumebuild.herokuapp.com/api/coverletter/list/5f278d28cf154530147bcf95'
      , config)
      .then(function (response) {
        setFormData(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }); */

      const payload = { 
        userId: userInfo.userId
    };

      coverLetterServices.getAllCoverLetters(payload).then(res => {
        if (res.status === 200) {
          setFormData(res.data.data);
        console.log(res.data.data);
        }
      });

  }, []);



  return (
    <div>
      <Breadcrumbs links={breadcrumbLinks} />
      <Card
        bg='light'
        text='dark'
      >
        <Card.Header>
          <NavLink exact to='/cover-letter/add' className='btn btn-outline-danger float-right'>New Cover Letter</NavLink>
        </Card.Header>
        <Card.Body>
          <Card.Title>Cover Letters</Card.Title>
          {formData.map(
            (coverletter) => (
              <CoverLetter data={coverletter} formUpdate={formUpdate} formRemove={formRemove} key={coverletter._id} />
            )
          )}
          <div class='float-left'>Showing 1 to 10 of 100 entries</div>
          <Pagination className='float-right'>{items}</Pagination>
        </Card.Body>

      </Card>
    </div>
  );
}

export default CoverLetters;
