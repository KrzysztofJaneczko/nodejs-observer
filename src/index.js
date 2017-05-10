import express from 'express'
import path from 'path'
import http from 'http'

import getData from './getData.js'
import getTemplate from './getTemplate.js'

const data = {
  amountCount: '0',
  lastUpdateDate: '',
  lastChangeDate: 'no change detected yet'
}

getData(data, true)
setInterval(() => {
  getData(data)
}, 1000 * 60)

const server = express()

server.get('/', (req, res) => {
  res.send(getTemplate(data.amountCount, data.lastUpdateDate, data.lastChangeDate))
})

const port = process.env.APP_SERVER_PORT || 3000
server.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('===================> Listening on port %s.', port)
})
