Active Aura

## Overview


Active Aura is a fitness tracking app that allows user to input workout session along with the exercises they have done for how many sets and reps. It also provies users witha visual to see how active they have been over a given period of time.
### Problem

Tracking what you have done in the gym with a clunky notebook or remembering what you have done the last workout is hard. This helps simplfies the process while keeping tracking of your process much easier, making progressing in your health that much easier.

### User Profile

The target users are people who want to make progress in their health while keeping themselves accountable by how often they exercise and what exercises they have previously done.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

## Implementation

### Tech Stack

React 
Express.JS
GraphQL

### APIs

JSON file compiled of exercises from CHATGPT. 

### Sitemap

Landing Page: 
 - A nice aesthetically pleasing page that shows what the app is about.

User Insight Page: 
 - Workout Log ( Get data from a self created JSON file.)
 - Graph that changes based on data of how many workouts user has logged in a period of time

Create Workout Page:
 - A form that a user can fill out to log their workout and what exercises it consists of.( posts this method to the backend to log the workout.)

Exercise Page: 
 - A list of exercies user can help choose what their workout will compile of.

### Mockups

![](mockup.png)

### Data

MVP is to use dummy data in a JSON file created using chatgpt. Aiming to use an exercise API to compile a list of exercises for user's to pick from. 

If done, many to many relationship. (users - exercises)

### Endpoints

Get /exercises
 - User Gets Exercises 

Parameters:
 - Exercise ID

Response:
```
[
    {
        "id": 1,
        "exercise-name": "Pull Ups",
        "muscle":"Back" ,
    },
    ...
]
```

**Get /workout/:userID/**

- User gets workout details

Parameters:
- id: user id

Response:
```
{
    "id": 1,
    "name": "User",
    "date": 05/25/24,
    "workout": [
              {
                  "exercise": "Bench Press",
                  "muscle": "Chest",
                  "weight": "500lbs"
                  "sets": 3,
                  "reps": 5
              },
              {
                  "exercise": "Squat",
                  "muscle": "Quads",
                  "weight": "100lbs"
                  "sets": 3,
                  "reps": 5
              },
              {
                  "exercise": "Bicep Curl",
                  "muscle": "Biceps",
                  "weight": "25lbs"
                  "sets": 3,
                  "reps": 12
              },
          ] 
}
```

### Auth

This project does not require any authentication or authorization.

## Roadmap

Create Client Side:
 - Home Page
 - User Insight Page
 - Create Workout Page
 - Exercise Page

API Requests: 
 - Get Request to Gain User's Previous Workout
 - Get Request To get Exercises 
 - Put Request to Create and Update User's Workouts

Fix Potential Bugs

Demo Day


## Nice-to-haves
Server:
- Create server with a database which holds user workout log.
- Have a create user and login page so you can access different user's information.

