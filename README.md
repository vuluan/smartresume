# Responsibilities
**Luan Nguyen:** Create the layout structure, Experience Page, Languages Page  
**Hung Phung:** Registration Page, Login Page, Project List Page  
**Michael Anetor:** Contact Me Page, Basic Information Page, Cover Letter Page  
**Roman Mbwasi:** Resume List (Home) Page, Profile Page, Job Objective Page, Education Page   

## Note if running locally use 'npm run local' to start the backend.
## EndPoints
## Education EndPoints (Roman)
**Add Education**

Authorization Header Required:

Authorization: Bearer UserAuthTokenHere

POST: https://smartresumebuild.herokuapp.com/api/education/add

Request:
```javascript
{
  "user_id": "5f29e49520781d0017b465b9",
  "school": "University of Toronto",
  "degree": "Masters",
  "field": "Computer Science",
  "start": "2000",
  "finish": "2010"
}
```
Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f2b008a899f8100176e3da9",
        "user_id": "5f29e49520781d0017b465b9",
        "school": "University of Toronto",
        "degree": "Masters",
        "field": "Computer Science",
        "start": "2000",
        "finish": "2010",
        "__v": 0
    }
}
```
**Get Education By Id**

Authorization Header Required:

Authorization: Bearer UserAuthTokenHere

GET: https://smartresumebuild.herokuapp.com/api/education/5f29e5ee20781d0017b465ba

Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f29e5ee20781d0017b465ba",
        "user_id": "5f29e49520781d0017b465b9",
        "school": "Humber College",
        "degree": "Masters",
        "field": "IT",
        "start": "2000",
        "finish": "2010",
        "__v": 0
    }
}
```

**Get Education List By UserId**

Authorization Header Required:

Authorization: Bearer UserAuthTokenHere

GET: https://smartresumebuild.herokuapp.com/api/education/list/5f29e49520781d0017b465b9

Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": [
        {
            "_id": "5f29e5ee20781d0017b465ba",
            "user_id": "5f29e49520781d0017b465b9",
            "school": "Humber College",
            "degree": "Masters",
            "field": "IT",
            "start": "2000",
            "finish": "2010",
            "__v": 0
        },
        {
            "_id": "5f2b008a899f8100176e3da9",
            "user_id": "5f29e49520781d0017b465b9",
            "school": "University of Toronto",
            "degree": "Masters",
            "field": "Computer Science",
            "start": "2000",
            "finish": "2010",
            "__v": 0
        }
    ]
}
```

**Delete Education**

Authorization Header Required:

Authorization: Bearer UserAuthTokenHere

DELETE: https://smartresumebuild.herokuapp.com/api/education

Request:
```javascript
{
    "id": "5f29e5ee20781d0017b465ba"
}
```
Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f29e5ee20781d0017b465ba",
        "user_id": "5f29e49520781d0017b465b9",
        "school": "Humber College",
        "degree": "Masters",
        "field": "IT",
        "start": "2000",
        "finish": "2010",
        "__v": 0
    }
}
```


**Update Education**

Authorization Header Required:

Authorization: Bearer UserAuthTokenHere

PUT: https://smartresumebuild.herokuapp.com/api/education

Request:
```javascript
{
   "id": "5f2b041753e6352e9403850f",
  "user_id": "5f2b03ba53e6352e9403850e",
  "school": "University of Cape Town",
  "degree": "Masters",
  "field": "IT",
  "start": "2000",
  "finish": "2005"
}
```
Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f2b041753e6352e9403850f",
        "user_id": "5f2b03ba53e6352e9403850e",
        "school": "University of Cape Town",
        "degree": "Masters",
        "field": "IT",
        "start": "2000",
        "finish": "2005",
        "__v": 0
    }
}
```

## Authentication EndPoints (Hung)
**User Registration**

POST: https://smartresumebuild.herokuapp.com/api/auth/register

Request:
```javascript
{
    "email": "nguyenvuluan89@gmail.com",
    "password": "12345",
    "confirmedPassword": "12345"
}
```
Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f2b72ef54af050017dd4223",
        "created_date": "2020-08-06T03:03:11.526Z",
        "email": "nguyenvuluan89@gmail.com",
        "__v": 0
    }
}
```

**User Login**

POST: https://smartresumebuild.herokuapp.com/api/auth/login

Request:
```javascript
{
    "email": "nguyenvuluan89@gmail.com",
    "password": "12345"
}
```
Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "email": "nguyenvuluan89@gmail.com",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibmd1eWVudnVsdWFuODlAZ21haWwuY29tIiwiX2lkIjoiNWYyYjcyZWY1NGFmMDUwMDE3ZGQ0MjIzIn0sImlhdCI6MTU5NjY4MzExMX0.2VjJh5WIfK9CeJxZwf9nIMD6thSmtJUtHp_QRheIMmU"
    }
}
```


## Language EndPoints (Luan)
**Add Language**
Authorization Header Required:
Authorization: Bearer UserAuthTokenHere
POST: https://smartresumebuild.herokuapp.com/api/language/add

Request:
```javascript
{
    "user_id": "5f2b72ef54af050017dd4223",
    "language": "English",
    "proficiency": "Professional working proficiency"
}
```
Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f2b73c154af050017dd4224",
        "created_date": "2020-08-06T03:06:41.992Z",
        "user_id": "5f2b72ef54af050017dd4223",
        "language": "English",
        "proficiency": "Professional working proficiency",
        "__v": 0
    }
}
```
**Get Language By Id**
Authorization Header Required:
Authorization: Bearer UserAuthTokenHere
GET: https://smartresumebuild.herokuapp.com/api/language/{language-id}

Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f2b73c154af050017dd4224",
        "created_date": "2020-08-06T03:06:41.992Z",
        "user_id": "5f2b72ef54af050017dd4223",
        "language": "English",
        "proficiency": "Professional working proficiency",
        "__v": 0
    }
}
```

**Get Language List By UserId**
Authorization Header Required:
Authorization: Bearer UserAuthTokenHere
GET: https://smartresumebuild.herokuapp.com/api/language/list/{user-id}

Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": [
        {
            "_id": "5f2b73c154af050017dd4224",
            "created_date": "2020-08-06T03:06:41.992Z",
            "user_id": "5f2b72ef54af050017dd4223",
            "language": "English",
            "proficiency": "Professional working proficiency",
            "__v": 0
        }
    ]
}
```

**Delete Language**
Authorization Header Required:
Authorization: Bearer UserAuthTokenHere
DELETE: https://smartresumebuild.herokuapp.com/api/language

Request:
```javascript
{
    "id": "{language_id}"
}
```
Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f2b73c154af050017dd4224",
        "created_date": "2020-08-06T03:06:41.992Z",
        "user_id": "5f2b72ef54af050017dd4223",
        "language": "English",
        "proficiency": "Professional working proficiency",
        "__v": 0
    }
}
```

**Update Language**
Authorization Header Required:
Authorization: Bearer UserAuthTokenHere
PUT: https://smartresumebuild.herokuapp.com/api/language

Request:
```javascript
{
    "id": "5f0a8d1fa380783ef49936d8",
    "user_id": "5f0a819684a234361cf9421c",
    "language": "Vietnamese2",
    "proficiency": "Professional working proficiency"
}
```
Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f2b755b54af050017dd4225",
        "created_date": "2020-08-06T03:13:31.365Z",
        "user_id": "5f2b72ef54af050017dd4223",
        "language": "Vietnamese 2",
        "proficiency": "Professional working proficiency",
        "__v": 0
    }
}
```

# Front-End

Front-End uses React

## Setup

Go to the frontend folder /frontend, then create .env from .env.example

## Installation

Install the packages

```bash
npm install
```

## Usage

```python
npm start
```

# Back-End

Back-End uses Express and MongoDB

## Setup

Go to the frontend folder /backend, then create .env from .env.example

## Installation

Install the packages

```bash
npm install
```

## Usage

```python
npm run local
```


