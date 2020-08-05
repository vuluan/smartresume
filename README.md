# Responsibilities
**Luan Nguyen:** Create the layout structure, Experience Page, Languages Page  
**Hung Phung:** Registration Page, Login Page, Project List Page  
**Michael Anetor:** Contact Me Page, Basic Information Page, Cover Letter Page  
**Roman Mbwasi:** Resume List (Home) Page, Profile Page, Job Objective Page, Education Page   

## EndPoints
## Education EndPoints (Roman)
**Add Education**

Authorization Header Required:

Authorization: Bearer TokenString_DSFSDFSD452345AF8SDJF87FUD8D

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

Authorization: Bearer TokenString_DSFSDFSD452345AF8SDJF87FUD8D

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

Authorization: Bearer TokenString_DSFSDFSD452345AF8SDJF87FUD8D

GET: {{BASE_URL}}/api/education/list/5f29e49520781d0017b465b9

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

Authorization: Bearer TokenString_DSFSDFSD452345AF8SDJF87FUD8D

DELETE: {{BASE_URL}}/api/education

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

Authorization: Bearer TokenString_DSFSDFSD452345AF8SDJF87FUD8D

PUT: {{BASE_URL}}/api/education

Request:
```javascript
{
   "id": "5f266a3b1a073c3f900b6e10",
  "user_id": "5f2661a29ee13a46dc8edf4f",
  "school": "University of Cape Town",
  "degree": "Masters",
  "field": "IT",
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
npm start
```


