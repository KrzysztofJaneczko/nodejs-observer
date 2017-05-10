import request from 'request'
import HTMLParser from 'fast-html-parser'
import dateFormat from 'dateformat'
import fs from 'fs'

const getData = (data, firstShot) => {
  request.get('http://www.nationaldebtclocks.org/debtclock/unitedstates', (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const now = new Date()
        data.lastUpdateDate = dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM TT')

        const parsedHtml = HTMLParser.parse(body)
        const newCount = parsedHtml.querySelector('#debtDisplayFast').childNodes[0].rawText

        if (newCount !== data.amountCount && !firstShot) {
          // Change detected
          data.lastChangeDate = data.lastUpdateDate

          const yearMonthDay = dateFormat(now, 'yyyy-mm-dd')
          const hourMinute = dateFormat(now, 'HH:MM:ss')
          fs.appendFile(
            `./logs/${yearMonthDay}.txt`, // filename - every day get a separate file
            `[${hourMinute}] ${data.amountCount} \n`, // message
            function (err) {
              if (err) throw err
            }
          )
        }

        data.amountCount = newCount
      }
  })
}

export default getData
