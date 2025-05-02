# nodejs-crash-course-2024

This is an intro to Node.js with no frameworks or libraries. It looks at core modules including building a server with the http module

---

## Initialize Node.js project

The command `npm init` initalizes a Node.js project, creating a package.json file.
This file describes the project's dependencies, version, and other metadata.
It prompts for project information during the initializtion process.
`npm init -y` will skip the prompts.

---

## .env

PORT="port_number"

---

## package.json

Scripts can be created in the package.json.
For example:
`"scripts": {"start": "node server.js"}`
allows for the use of the `npm start` command to run the server.js file.
Change the file name to run different files.

---

## index.js

The index.js file imports the generateRandomNumber and celciusToFahrenheit functions from the utils.js file using CommonJS imports.
The two function are then run as console logs to view the output of the functions.
This code is commented out.

The index.js file now imports getPosts and getPostsLength from the postController.js file using ESModules imports.
ESModules is the prefered way to import/export and typically what frameworks use.
The two function are then run as console logs to view the output of the functions.

---

## utils.js

The utils.js file contains the generateRandomNumber and celciusToFahrenheit functions.
The functions are exported using CommonJS.

---

## postController.js

The postController.js file contains a posts array with two post objects to use as sample data.
This file also contains two simple functions to get all of the posts from the post objects array. This function is exported as default using ESModules.

The second function getPostsLength gets the length of the posts array. This function is a regular export using ESModules.

---

## server.js

Imports http module that is included in node.js.
Creates a server using the http module.
This file handles routes for the index.html and about.html files that are in the public folder.

---

## server2.js

The server2.js file is an example of a router/api to GET and POST users.

---

## fsDemo.js

The fsDemo.js file demonstrates the fs module. Which can read and write to and from text files.
The test.txt file is used along with the fsDemo.js file.

---

## pathDemo.js

The pathDemo.js file demonstrates the path module. This module is used to work with file paths.

---

## osDemo.js

The osDemo.js file domonstrates the os module. This module can provide information regarding the system.
Such as memory usage and availability, CPU information, user information, etc.

---

## urlDemo.js

The urlDemo.js file demonstrates the url module. This module allows you to work with URLs in various ways.
A URL string can be made into an object which contains various bits and information of the URL.
A URL object can also be made into a URL string using .format().
Search params can be captured using URLSearchParams().

---

## cryptoDemo.js

The cryptoDemo.js file demonstrates the crypto module. This module can be used to encrypt and decrypt information.

---

## eventsDemo.js

This eventsDemo.js file demonstrates the events module, more specifcally the EventEmitter.
This can be used to create your own custom events and then handle those events.
