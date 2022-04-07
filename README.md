# Students Web API

Guided project for **Node API 1** Module.

In this project we will learn how to create a simple Web API using `Node.js` and `Express`, and cover the basics of server-side routing using global middleware.

## Prerequisites

- an HTTP client like [Postman](https://www.getpostman.com/downloads/) or [Insomnia](https://insomnia.rest/download/).

## Project Setup

- [ ] Clone this repository.
- [ ] Open the project folder in VSCode.

## Assignment

Build a RESTful Web API for an animal shelter to Create, Read, Update and Delete _"Students"_ .

A Student has:

- a unique `id`.
- a `name`.
- a `school`.
- a `grade`.
- a `age`.


### Features

The Web API must provide a set of `endpoints` to fulfill the following needs:

- add a new Student.
- view a list of existing Students.
- view the details of a single Student.
- update the information of an existing Student.
- remove a Student.

Here is a table with the `endpoint` descriptions:

| Action                | URL                         | Method | Response          |
| :-------------------- | :----------------- | :----- | :---------------- |
| Add a Student             | /api/students          | POST   | the new Student       |
| View list of Students     | /api/students          | GET    | array of Students     |
| View Student details      | /api/students/{id}     | GET    | a Student             |
| Update Student            | /api/students/{id}     | PUT    | updated Student       |
| Remove a Student          | /api/students/{id}     | DELETE | deleted Student       |
