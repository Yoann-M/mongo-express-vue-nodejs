const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// --- MONGO DB ----- //
const modelPost = require('../models/post');
var db
// var linkToDb = ""
// var dbName = ""

MongoClient.connect(linkToDb, {
    useNewUrlParser: true
}, (err, database) => {
    if (err) return console.log(err)
    db = database.db(dbName) // whatever your database name is
    modelPost.createCollection(db); // test de creation de collection
    app.listen(process.env.PORT || 8081, () => {
        console.log('listening on 8081')
    })
})

// --- GET ----- //
app.get('/posts', (req, res) => {
    db.collection('posts').find().toArray(function (err, results) {
        res.send(results)
    })
})

app.post('/posts', (req, res) => {
    db.collection('posts').insertOne( {
        title: req.body.title,
        description: req.body.description
    }, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
    })
})

app.delete('/posts/:id', (req, res) => {
    db.collection('posts').deleteOne({
      _id: new mongodb.ObjectId(req.params.id)
    },
      (err, result) => {
        if (err) return res.send(500, err)
      })
  })