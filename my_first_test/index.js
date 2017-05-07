
// console.log("Hello World!");
// var express = require('express');

/* sync execution
var fs = require('fs');
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('Program Ended');
*/

/* async execution
var fs = require('fs');
fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log('It goes after all!');
   console.log(data.toString());
});
console.log('Program Ended');
*/

// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
// Create an event handler as follows
var connectHandler = function connected(c) {
   console.log('connection succesful.', c);
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}
// Bind the connection event with the handler
eventEmitter.on('connection2', connectHandler);
eventEmitter.on('connection1', connectHandler);
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});


var listener = function eventListener(c) {
  console.log('listener executed for ' + c);
}

var openFileListener = function openFileListener() {
   console.log('file is opened');
}

//const qqqq = require('fs.FSWatcher');

console.log( __filename );

eventEmitter.addListener('connection1', listener);

// Fire the connection event 
eventEmitter.emit('connection2', "Hello");
eventEmitter.emit('connection1', "World");

console.log("Program Ended.");



var http = require('http');
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   // Send the response body as "Hello World"
   response.end('Hello World on 8082!\n');
}).listen(8082);
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   // Send the response body as "Hello World"
   response.end('Hello World on 8083!\n');
}).listen(8083);

// Console will print the message
console.log('Server running here: http://127.0.0.1:8082/');