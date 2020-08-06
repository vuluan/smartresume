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

## Language EndPoints (Luan)
**Add Language**
Authorization Header Required:
Authorization: Bearer UserAuthTokenHere
POST: https://smartresumebuild.herokuapp.com/api/language/add

Request:
```javascript
{
    "user_id": "5f0a819684a234361cf9421c",
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
        "_id": "5f29b94d01e7842412fd782c",
        "created_date": "2020-08-04T19:38:53.531Z",
        "user_id": "5f0a819684a234361cf9421c",
        "language": "English2",
        "proficiency": "Professional working proficiency",
        "__v": 0
    }
}
```
**Get Language By Id**
Authorization Header Required:
Authorization: Bearer UserAuthTokenHere
GET: https://smartresumebuild.herokuapp.com/api/language/5f29b94d01e7842412fd782c

Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f0a8d1fa380783ef49936d8",
        "created_date": "2020-07-12T04:10:07.029Z",
        "user_id": "5f0a819684a234361cf9421c",
        "language": "Vietnamese",
        "proficiency": "Professional working proficiency",
        "__v": 0
    }
}
```

**Get Language List By UserId**
Authorization Header Required:
Authorization: Bearer UserAuthTokenHere
GET: https://smartresumebuild.herokuapp.com/api/language/list/5f0a819684a234361cf9421c

Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": [
        {
            "_id": "5f0a8d1fa380783ef49936d8",
            "created_date": "2020-07-12T04:10:07.029Z",
            "user_id": "5f0a819684a234361cf9421c",
            "language": "Vietnamese",
            "proficiency": "Professional working proficiency",
            "__v": 0
        },
        {
            "_id": "5f0be5461ed6a85d2a744fbb",
            "created_date": "2020-07-13T04:38:30.847Z",
            "user_id": "5f0a819684a234361cf9421c",
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
    "id": "5f29b94d01e7842412fd782c"
}
```
Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f29b94d01e7842412fd782c",
        "created_date": "2020-08-04T19:38:53.531Z",
        "user_id": "5f0a819684a234361cf9421c",
        "language": "English2",
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
        "_id": "5f0a8d1fa380783ef49936d8",
        "created_date": "2020-07-12T04:10:07.029Z",
        "user_id": "5f0a819684a234361cf9421c",
        "language": "Vietnamese2",
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


