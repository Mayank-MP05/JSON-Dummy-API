# JSON Dummy API

## Introduction

This is simple express backed REST api server which send dummy data as respose as per set by the user. You use this in your front-end project as testing api server.

As this `JSON-Dummy-API` uses express app at backend you need to constantly detect changes and restart the server that's the where dev. dependancy called `nodemon` come handy

You can directly use node to start the server but each time you make changes in server configurations or any server related file you have to terminate the server and run node command again and again thats why we are using nodemon for constant change detection and updation

To use nodemon in your project, lets first install it

```sh
npm i nodemon --save-dev
```

you can install globally if you want you just need to add `-g` flag to the command after you install nodemon next step is to create `server.js` file

## Create the Server config file

---

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

- `startDummyServer` is the must have function to start the server.
- `routes` is the configuration array which is optional

After you create server.js file to start this dummy server on localhost you have to use nodemon (or maybe node in your case). To start the server simply run below command in the same file directory

```sh
nodemon server.js
```

For constant change tracking and automatic restart

#### OR

```sh
node server.js
```

For single time start

### Points to Note here

1. `app` : Return the express app instance on which you can directly start express backend coding if you want

2. you must call/import `json-dummy-api` using `require("json-dummy-api")` as it uses Node at it Core

3. startDummyServer Function : It is a function which actually starts listening the server. You can pass config routes as parameter if you want.

4. Configroutes : its is an array of objects passed to `startDummyServer()` which is basically configuration for on which route which object to be sent

## Random Data Types Config

| Data Import | Return values of                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| PARAGRAPH   | Returns the small parapgraph with avg 5 sentenses                                                                   |
| NAME        | returns first name and last name combined                                                                           |
| SENTENSE    | returns the sentense of avg 7 words                                                                                 |
| ADDRESS     | smallest possible address generator                                                                                 |
| COUNTRY     | Two Digit Short Country Code                                                                                        |
| EMAIL       | Generated random fake email with @                                                                                  |
| USERNAME    | Generate Twitter username (random + fake) "@" included                                                              |
| COMPANY     | Generate fake company name to user                                                                                  |
| DOMAIN      | generate fake domain name for the comapany or the user                                                              |
| PHONE       | generates phone no                                                                                                  |
| DATE        | generates date as a string (Long format)                                                                            |
| TIMESTAMP   | Timestamp is 8 digit long number in ms                                                                              |
| NUMBER      | generate random integer                                                                                             |
| FLOAT       | Random Float value between 0 to 1                                                                                   |
| BOOL        | Returns either `true` or `false`                                                                                    |
| NULL        | returns `null`                                                                                                      |
| IMGURL      | can pass single (as a side of sqaure) or two-arguments (width and hieght of the image) and it returns the image url |

---

All the above datatypes are exported from the module. you can simply import them via using Object Destructuring syntax. It regenrated random data for Mocking/Prototyping

---

## Whats New in V2

V1 does not support Array and Object integration but the truth is JSON is incomplete without closely integrated Arrays and Objects in each others.For this problem set 2 new data config are added

| Data Import | Return values of                                                                     |
| ----------- | ------------------------------------------------------------------------------------ |
| OBJECT      | Returns the Empty Object by Default, can pass object key-value pairs as a Parameters |
| ARRAY       | returns the Array of `type` Specified of `limit` as length                           |

## Use Cases

#### OBJECT

```sh
const { DATE, BOOL, OBJECT } = require("dummy-json-api");
const routes = [
  {
    routeName: "/object",
    response: {
      birthDay: OBJECT({
        date: DATE,
        adult: BOOL,
      }),
    },
  },
];
app.startDummyServer(routes);
```

in `OBJECT` function you can directly pass the childrens and its types as per above example

#### ARRAY

```sh
const {
  app,
  BOOL,
  ARRAY,
} = require("json-dummy-api");
const routes = [
  {
    routeName: "/array",
    response: {
      arr: ARRAY({
        type: BOOL,
        limit: 30,
      }),
    },
  },
];
app.startDummyServer(routes);
```

in `ARRAY` function you can directly pass object where you can specify type of the array elements in `type` and length of the array in `limit` args. Both args are compulsory

## Default Routes

while developing version 1 I just wanted to add some default routes just like json-typicode api hence three default routes were added in V2

| Route       | Value it returns                                                               |
| ----------- | ------------------------------------------------------------------------------ |
| `/qanda`    | returns the array of the QandA with Question, Answer , Upvotes , Downvotes     |
| `/users`    | return the array of user objects with Name,username,Bio,Age                    |
| `/products` | returns the array of products with title, description,price,starrating,instock |

Above are all the parent routes like this routes usually returns all the data. To get one perticular object you have to pass the id in request as `/users/25`
above request will send only the data of user with userID 25

`examples`

```
/users/12
/users
/products/25
/qanda/14
```

---

## v3 Specials :

In version 3 you can request any type of request to the server i.e GET, PUT,DELETE,POST

all you have to do is to specify `reqType` param in the route config object of the array.

`reqType` : `GET`,`POST`,`PUT`,`DELETE`

---
