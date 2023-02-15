# The Chitter Challenge | 6th Challenge

- [The Chitter Challenge | 6th Challenge](#the-chitter-challenge--6th-challenge)
  - [About](#about)
    - [Methodology](#methodology)
  - [Getting Started](#getting-started)
    - [Installation:](#installation)
  - [Problem Statements](#problem-statements)
    - [**User Story 1:**](#user-story-1)
    - [**User Story 2:**](#user-story-2)
    - [**User Story 3:**](#user-story-3)
    - [**User Story 4:**](#user-story-4)
    - [**User Story 5:**](#user-story-5)
    - [**User Story 6:**](#user-story-6)
    - [**Extended Criteria:**](#extended-criteria)
  - [Project Review](#project-review)
    - [Main Takeaways:](#main-takeaways)
    - [Future ideas:](#future-ideas)


## About
**Date of completion: 11/11/2022**

**Deployed Website: https://chitter-df.netlify.app/**
 
This challenge tests the ability to use React JS and Node JS to develop a full-stack application called Chitter (a social media webpage). 

### Methodology
1) Setup Databases using MongoDB Atlas.
2) Front-end design (using tailwind css, flowbite, mock JSON Data)
3) Back-end design (using express js framework)
4) Connected front and back-end, so the data in the real database is used. 
5) Write simple tests. 
6) Deployed


## Getting Started

### Installation:

- Clone the git repo
```
git clone https://github.com/Benjie00/chitter-challenge.git
```
- Install dependencies in root of project 
  
  ```
  cd server
  npm i
  cd .. 
  cd client 
  npm i
  ```

- Start server by entering `sever` directory (ensure nothing is already running on port: 8080).
    ```
    cd server
    npm start
    ```
- Start react app by entering `client` directory (ensure nothing is already running on port: 3000).

    ```
    cd client
    npm start
    ```
    

## Problem Statements
**Task:**

As usual please start by forking this repo.

We are going to write a small twitter clone that will allow users to post messages to a public wall.

Good luck and let the chitter begin!


### **User Story 1:**
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter



### **User Story 2:**
As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

### **User Story 3:**
As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

### **User Story 4:**
As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

### **User Story 5:** 
As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

### **User Story 6:** 
As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter

### **Extended Criteria:**
- You don't have to be logged in to see the peeps.
- Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewithers@digitalfutures.com, password123, Edward Withers, dearshrewdwit).
- The username and email are unique.
- Peeps (posts to chitter) have the name of the trainee and their user handle.
- Your README should indicate the technologies used, and give instructions on how to install and run the tests.


## Project Review

### Main Takeaways:
- Developed understanding of how databases are used and work.
- Use of Mongosh Shell to manipulate data in MongoDB. 
- Routing, validation and sanitization.
- Developed ability to use Tailwind CSS and flowbite.
- Developed a simple login. 

### Future ideas:
- Add security to make passwords stored in DB more secure by using Bcrypt. 
- Develop a more advance login system, so the session is not lost upon refresh.
- Significantly improve testing.

  




