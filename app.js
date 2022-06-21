const { NotFoundError } = require ('./utils/errors');

const express = require('express')
const app = express();



const morgan = require('morgan')
app.use(morgan('tiny'))
app.use(express.json())

const router = require('./routes/gift-exchange')
app.use('/gift-exchange', router)

const bodyParser = require('body-parser')
app.use(bodyParser.json({type: 'applictaion/*+json'}))

app.get('/' , (req,res) =>{

    res.status(200).send({ "ping": "pong" })
})

app.use((req, res, next) => {
    next();
    throw new NotFoundError
  })

app.use((error,req,res,next) =>{
    let status = error.status || 500
    let message = error.message

    res.send({"error":{"status" : status, "message" : message}})

})

module.exports = app