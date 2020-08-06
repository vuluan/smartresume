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

## Experience EndPoints (Luan)
**Add Experience**
Authorization Header Required:
Authorization: Bearer UserAuthTokenHere
POST: https://smartresumebuild.herokuapp.com/api/experience/add

Request:
```javascript
{
    "user_id": "5f2b72ef54af050017dd4223",
    "title": "Front-end developer",
    "type": "Part-time",
    "company": "IGNITE",
    "location": "Toronto",
    "start_date": "08/15/2019",
    "end_date": "08/15/2020",
    "description": "test"
}
```
Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f2b897fcaf53c0017ead0b7",
        "start_date": "2019-08-15T00:00:00.000Z",
        "end_date": "2020-08-15T00:00:00.000Z",
        "user_id": "5f2b72ef54af050017dd4223",
        "title": "Front-end developer",
        "type": "Part-time",
        "company": "IGNITE",
        "location": "Toronto",
        "description": "test",
        "__v": 0
    }
}
```
**Get Experience By Id**
Authorization Header Required:
Authorization: Bearer UserAuthTokenHere
GET: https://smartresumebuild.herokuapp.com/api/experience/{experience-id}

Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f2b85b4a1276e67f5156bbe",
        "start_date": "2019-08-06T00:00:00.000Z",
        "end_date": "2020-08-06T00:00:00.000Z",
        "user_id": "5f0a819684a234361cf9421c",
        "title": "Front-end developer",
        "type": "Part-time",
        "company": "IGNITE",
        "location": "Toronto",
        "description": "test",
        "__v": 0
    }
}
```

**Get Experience List By UserId**
Authorization Header Required:
Authorization: Bearer UserAuthTokenHere
GET: https://smartresumebuild.herokuapp.com/api/experience/list/{user-id}

Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": [
        {
            "_id": "5f2b897fcaf53c0017ead0b7",
            "start_date": "2019-08-15T00:00:00.000Z",
            "end_date": "2020-08-15T00:00:00.000Z",
            "user_id": "5f2b72ef54af050017dd4223",
            "title": "Front-end developer",
            "type": "Part-time",
            "company": "IGNITE",
            "location": "Toronto",
            "description": "test",
            "__v": 0
        }
    ]
}
```

**Delete Language**
Authorization Header Required:
Authorization: Bearer UserAuthTokenHere
DELETE: https://smartresumebuild.herokuapp.com/api/experience

Request:
```javascript
{
    "id": "{experience-id}"
}
```
Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f2b897fcaf53c0017ead0b7",
        "start_date": "2019-08-15T00:00:00.000Z",
        "end_date": "2020-08-15T00:00:00.000Z",
        "user_id": "5f2b72ef54af050017dd4223",
        "title": "Front-end developer",
        "type": "Part-time",
        "company": "IGNITE",
        "location": "Toronto",
        "description": "test",
        "__v": 0
    }
}
```

**Update Experience**
Authorization Header Required:
Authorization: Bearer UserAuthTokenHere
PUT: https://smartresumebuild.herokuapp.com/api/experience

Request:
```javascript
{
    "id": "5f2b8b60caf53c0017ead0b8",
    "user_id": "5f2b72ef54af050017dd4223",
    "title": "Front-end developer 2",
    "type": "Part-time",
    "company": "IGNITE",
    "location": "Toronto",
    "start_date": "08/15/2019",
    "end_date": "08/15/2020",
    "description": "test"
}
```
Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": {
        "_id": "5f2b8b60caf53c0017ead0b8",
        "start_date": "2019-08-15T00:00:00.000Z",
        "end_date": "2020-08-15T00:00:00.000Z",
        "user_id": "5f2b72ef54af050017dd4223",
        "title": "Front-end developer 2",
        "type": "Part-time",
        "company": "IGNITE",
        "location": "Toronto",
        "description": "test",
        "__v": 0
    }
}
```

## CoverLetter EndPoints (Michael)
**Add CoverLetter**

Authorization Header Required:

Authorization: Bearer UserAuthToken Here

POST: https://smartresumebuild.herokuapp.com/api/coverletter/add

Request:
```javascript
        {
            "user_id": "5f278d28cf154530147bcf95",
            "title": "React JS Developer",
            "body": "Working hard to do more"
        }
```
**Get CoverLetter By Id**

Authorization Header Required:

Authorization: Bearer UserAuthToken Here

GET: https://smartresumebuild.herokuapp.com/api/coverletter/5f279580cf154530147bcf97

Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data":{
	"_id":{"$oid":"5f279580cf154530147bcf97"},
	"created_date":{"$date":{"$numberLong":"1596429696094"}},
	"user_id":"5f278d28cf154530147bcf95",
	"title":"Java Developer",
	"body":"I'm the best I'm the best I'm the best fit for your Java dev team",
	"__v":{"$numberInt":"0"}}
}
```

**Get CoverLetter List By UserId**

Authorization Header Required:

Authorization: Bearer UserAuthToken Here

GET: https://smartresumebuild.herokuapp.com/api/coverletter/list/5f278d28cf154530147bcf95

Response:
```javascript
{
    "isSuccess": true,
    "message": "",
    "data": [        
	{	"_id":{"$oid":"5f279580cf154530147bcf97"},
	"created_date":{"$date":{"$numberLong":"1596429696094"}},
	"user_id":"5f278d28cf154530147bcf95",
	"title":"Java Developer",
	"body":"I'm the best I'm the best I'm the best fit for your Java dev team",
	"__v":{"$numberInt":"0"}
	},	
	{
	"_id":{"$oid":"5f27966fcf154530147bcf98"},
	"created_date":{"$date":{"$numberLong":"1596429935481"}},
	"user_id":"5f278d28cf154530147bcf95",
	"title":"FullStack Developer",
	"body":" I'm the best for your backend stuff",
	"__v":{"$numberInt":"0"}
	},
	{
	"_id":{"$oid":"5f2b28536bfd18097898e156"},
	"created_date":{"$date":{"$numberLong":"1596663891984"}},
	"user_id":"5f278d28cf154530147bcf95",
	"title":"React JS Developer",
	"body":"Working hard to do more",
	"__v":{"$numberInt":"0"}}
    ]
}
```

**Delete CoverLetter**

Authorization Header Required:

Authorization: Bearer UserAuthToken Here

DELETE: https://smartresumebuild.herokuapp.com/api/coverletter

Request:
```javascript
{
    "id": "5f279580cf154530147bcf97"
}
```


**Update CoverLetter**

Authorization Header Required:

Authorization: Bearer UserAuthToken Here

PUT: https://smartresumebuild.herokuapp.com/api/coverletter

Request:
```javascript
       {
            "id": "5f2b28536bfd18097898e156",
            "user_id": "5f278d28cf154530147bcf95",
            "title": "React JS Developer",
            "body": "Working hard to do better"
        }
```
## BasicInfo EndPoints (Michael)
**Add BasicInfo**

Authorization Header Required:

Authorization: Bearer UserAuthToken Here

POST: https://smartresumebuild.herokuapp.com/api/basicinfo/add

Request:
```javascript
        {
    "user_id": "5f278d28cf154530147bcf95",
    "firstName": "Michael",
    "lastName": "Anetor",
    "email": "michellanet@gmail.com",
    "phone": "6120808080",
    "address": "1 Main St E",
    "country": "Canada",
    "region": "Ontario",
    "gitHub": "https://github.com/devBoy",
    "linkedin": "https://www.linkedin.com/in/michael-anetor"
}
```
**Get BasicInfo By Id**

Authorization Header Required:

Authorization: Bearer UserAuthToken Here

GET: https://smartresumebuild.herokuapp.com/api/basicinfo/5f2b28cc6bfd18097898e157

Response:
```javascript
{
            "_id": "5f2b28cc6bfd18097898e157",
            "created_date": "2020-08-05T21:46:52.650Z",
            "user_id": "5f278d28cf154530147bcf95",
            "firstName": "Michael",
            "lastName": "Anetor",
            "email": "michellanet@gmail.com",
            "phone": "6120808080",
            "address": "1 Main St E",
            "country": "Canada",
            "region": "Ontario",
            "gitHub": "https://github.com/devBoy",
            "linkedin": "https://www.linkedin.com/in/michael-anetor",
            "__v": 0
        }
```

**Get BasicInfo List By UserId**

Authorization Header Required:

Authorization: Bearer UserAuthToken Here

GET: https://smartresumebuild.herokuapp.com/api/basicinfo/list/5f278d28cf154530147bcf95

Response:
```javascript
{
            "_id": "5f2b28cc6bfd18097898e157",
            "created_date": "2020-08-05T21:46:52.650Z",
            "user_id": "5f278d28cf154530147bcf95",
            "firstName": "Michael",
            "lastName": "Anetor",
            "email": "michellanet@gmail.com",
            "phone": "6120808080",
            "address": "1 Main St E",
            "country": "Canada",
            "region": "Ontario",
            "gitHub": "https://github.com/devBoy",
            "linkedin": "https://www.linkedin.com/in/michael-anetor",
            "__v": 0
        }
```

**Delete BasicInfo**

Authorization Header Required:

Authorization: Bearer UserAuthToken Here

DELETE: https://smartresumebuild.herokuapp.com/api/basicinfo

Request:
```javascript
{
    "id": "5f2b28cc6bfd18097898e157"
}
```


**Update BasicInfo**

Authorization Header Required:

Authorization: Bearer UserAuthToken Here

PUT: https://smartresumebuild.herokuapp.com/api/basicinfo

Request:
```javascript
       {
            "id": "5f2b28cc6bfd18097898e157",
            "created_date": "2020-08-05T21:46:52.650Z",
            "user_id": "5f278d28cf154530147bcf95",
            "firstName": "Michael",
            "lastName": "Anetor",
            "email": "michellanet@gmail.com",
            "phone": "6120808080",
            "address": "1 Main St E",
            "country": "Canada",
            "region": "Ontario",
            "gitHub": "https://github.com/devBoy",
            "linkedin": "https://www.linkedin.com/in/michael-anetor",
            "__v": 0
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


