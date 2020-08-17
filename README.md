# JSON Dummy API @1.2.0

## Introduction 

This is simple express backed REST api server which send dummy data as respose as per set by the user. You use this in your front-end project as testing api server.

As this `JSON-Dummy-API` uses express app at backend you need to constantly detect changes and restart the server that's the where dev. dependancy called `nodemon` come handy

You can directly use node to start the server but each time you make changes in server configurations or any server related file you have to terminate the server and run node command again and again thats why we are using nodemon for constant change detection and updation

To use nodemon in your project, lets first install it

```sh
npm i nodemon --save-dev
```

## Create the Server config file

Below given is the very basic syntax of the configuration and server starter file you need

```sh
const { app , PARAGRAPH } = require("json-dummy-api");

const routes = [
  {
    routeName: "/simpleParagraph",
    response: {
      para: PARAGRAPH,
    },
  },
];

app.startDummyServer(routes);
```

### Points to Note here
1. ```app``` : Return the express app instance on which you can directly start express backend coding if you want

2. you must call/import ```json-dummy-api``` using ```require("json-dummy-api")``` as it uses Node at it Core

3. startDummyServer Function : It is a function which actually starts listening the server. You can pass config routes as parameter if you want.

4. Configroutes : its is an array of objects passed to ```startDummyServer()``` which is basically configuration for on which route which object to be sent




