# JSON Dummy API @1.2.0

This is simple express backed REST api server which send dummy data as respose as per set by the user. You use this in your front-end project as testing api server.

As this `JSON-Dummy-API` uses express app at backend you need to constantly detect changes and restart the server that's the where dev. dependancy called `nodemon` come handy

You can directly use node to start the server but each time you make changes in server configurations or any server related file you have to terminate the server and run node command again and again thats why we are using nodemon for constant change detection and updation

To use nodemon in your project, lets first install it

```sh
npm i nodemon --save-dev
```
