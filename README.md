<br/>

## Unihomes Api

Working CRUD Operations.

---

## REST structure

### 1. Controllers

### 2. Routes

### 3. Models

---

<br/>

## About

This is a **REST** Api design for unihomes project.

Data is manipulated in Json format.<br/>
The json files are located in `dev-data\data`.

> This Api is then used to make the Unihome project where it uses Mongoose for mongo Database. Json is used here for development purposes.

---

<br/>

## End Point

All endpoints are initialized in app.js

```javascript
app.js;
```

### Each Resource or module is independent of each other where each has :

1.  A route. _Example `routes\bookingRoutes.js`_
2.  A controller. _Example `controller\bookingController.js`_
3.  json Data. _Example `dev-data\data\bookings.json`_

<br/>

## Resource Examples

### user resource

The users endpoint is used to get all registed users in the application.

```javascript
app.use("/api/v1/users", userRootes);
```

The user routes are used to call different user functions contained in the controller

```javascript
routes.get("/:id", userControler.getOneUser);
```

The user functions are located in the userController.js file.

```javascript
exports.getUsers = function name(req, res, next) {
  res.json({
    status: "success",
    response: userObject.length,
    data: {
      userObject,
    },
  });
};
```

<br/>

### The end points can be used with different http methods to manipulate the json Data stored

<br/>

## http Methods

### 1. Post

A post request to any endpoint is used to add data to the resource, thus data must be included in the request body

Route

```javascript
routes.post("/", userControler.addUser);
```

Controller

```javascript
exports.addUser = function (req, res) {
  let user = req.body;
  let id = { id: Math.random() };
  let newUser = Object.assign(id, user);
  userObject.push(newUser);

  fs.writeFile(
    `${__dirname}/../dev-data/data/users.json`,
    JSON.stringify(userObject),
    function (error) {
      if (error) {
        res.json({
          status: "failed",
          error,
        });
      } else {
        res.status(201).json({
          status: "success",
          data: {
            newUser,
          },
        });
      }
    }
  );
};
```

<br/>

The json data is first parsed into an object using `JSON.parse()`. When a post request is send, the body data is first assigned an id `let id = { id: Math.random() };` then the new object is pushed into the Json object ` userObject.push(newUser);`

The new data is then written to the existing json File using the file system `fs` package.<br/>
` fs.writeFile()`

<br/>

### 2. Get

A Get request is used to request the resource data from the Api

Route

```javascript
routes.get("/", userControler.getUsers);
```

Controller

```javascript
exports.getUsers = function name(req, res, next) {
  res.json({
    status: "success",
    response: userObject.length,
    data: {
      userObject,
    },
  });
};
```

<br/>

On a get request the Whole json object is sent back to the user.

<br/>

3. Patch - used for updation

4. Delete - used to detele an entry

<br/>

---

<br/>

## Setup

install the Api dependencies to get started, run

```
npm install
```

The Api uses two dependencies

1. nodemon - for autoReload on change
2. express - a node libray

```javascript
"dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.12"
  }
```

<br/>

## Starting the application

The node server is setup in `server.js` file.

```javascript
let port = 2000;
let server = app.listen(port, function () {
  console.log(`server started on port ${port}`);
});
```

The application uses port number 2000. If you have a process using this port number, change the port number in `server.js`

```javascript
let port = 3000;
// or any other number
```

To start run

```
npm start
```

This will trigger an npm script called start

```javascript
  "scripts": {
    "start": "nodemon server.js"
  },
```

<br/>

If you already have nodemon installed globbaly ie `-g ` just run

```javascript
nodemon server.js
```

<br/>

You can then access the api with PostMan using the localhost url.<br/>
Change the port number to the one you use <br/> ie `http://localhost:PORTNUMBER/`

```
http://localhost:2000/
```

### Or

```
http://127.0.0.1:2000/
```

---

<br/>

## Endpoints

<br/>

### User

```
http://127.0.0.1:2000/api/v1/users
```

### Owners

```
http://127.0.0.1:2000/api/v1/owners
```

### Houses

```
http://127.0.0.1:2000/api/v1/houses
```

### Estates

```
http://127.0.0.1:2000/api/v1/estates
```

### Bookings

```
http://127.0.0.1:2000/api/v1/bookings
```

### Locations

```
http://127.0.0.1:2000/api/v1/locations
```

---

> Enjoy

---

## Author

Alexander Karanja [@Twitter](https://twitter.com/aknjoroge)

---

## PostMan Documenation

[Open Postman Doc](https://documenter.getpostman.com/view/16071659/TzzHmYPU)

---

<br/>

## License

### MIT

<!-- Express object can be used to start a

server using .listen

MVC

- controller : only contains functions to be used, the functions are exported
- routes : define the routes paths, using express.routes
- models - define data schema -->
