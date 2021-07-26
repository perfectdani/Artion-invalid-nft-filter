require('dotenv').config()
const mongoose = require('mongoose')

require('./models/nftitems')
require('./models/erc721contract')
require('./models/category')
require('./models/bannenft')

const trackAll721s = require('./services/erc721tracker')

const uri = process.env.DB_URL

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', async () => {
  console.log('721 tracker has been connected to the db server')
  trackAll721s()
})
