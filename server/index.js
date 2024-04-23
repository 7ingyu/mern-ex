require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')
const { sequelize, Sequelize } = require('./models')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use(express.static('./dist'))

// localhost:3000/index.html

app.get('/', (req, res) => {
  const options = {
    root: path.join(__dirname, './dist'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  res.sendFile('index.html', options)
})

const apiController = require('./controller')
app.use('/api', apiController)

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Media app listening on port ${port}`)
})