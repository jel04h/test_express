'use strict'
const express = require('express'),
      posts = require('./mock/posts.json') // this adds a new database to call information from

var app = express()

app.get(`/`, function (request, response) {
  response.send(`<h1>Love is in the air! (pollen)</h1>`) // this is what comes up in the browser window
})

app.get(`/blog`, function (req, res) { // this adds a /blog url page.
  res.send(posts) // this requests the posts under /mock/posts
})

app.listen(3000, function () {
  console.log(`The frontend server is running on port 3000!`) // this comes up in the terminal after you type node src/app
})


