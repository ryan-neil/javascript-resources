# Tiles Todo

### Tiles is a simple CRUD todo application.

This project will be focused mainly on the backend and building an application through the lens of the backend.

The frontend of the application consists of a form and a list. By communicating with the backend (sending a request to the API), the user can Create, Read, Update, and Delete tasks.

The typical todo app stores everything in local storage. What's different about this todo app is, we will be building an API that communuicates with a cloud database and persists the data to the cloud.

> Persistent storage is any data storage device that retains data after power to that device is shut off. It is also sometimes referred to as non-volatile storage.

### What we'll learn:
  1. How to set up and connect to the cloud database. In other words, learn how to persist our data to the cloud. We'll also learn how to perform all the CRUD (Create, Read, Update, and Delete) operations.

  2. Setting up the API that communicates with the cloud database and persist the data to the cloud.

## Table of Contents
  * [Resources](#Resources)
  * [Project Setup](#Project-Setup)
  * [Routes](#Routes)

#

## Resources
  * [Project Tutorial - FCC](https://www.youtube.com/watch?v=qwfE7fSVaZM)
  * [Persistent Memory Explained - IBM](https://www.youtube.com/watch?v=7gkr-_t7wAk)

## Project Setup

In order to run the project, setup `.env` file and set `MONGO_URI` variable equal to the database connection string.

In order to avoid any port collisions, in the source code port value is `9001`.

## Routes

Let's have a look at all the routes and what we would like to accomplish with each route:
```js
app.get('/api/v1/tiles')        // -> get all tiles
app.post('/api/v1/tiles')       // -> create tile
app.get('/api/v1/tiles/:id')    // -> get single tile
app.patch('/api/v1/tiles/:id')  // -> update tile
app.delete('/api/v1/tiles/:id') // -> delete tile
```