require('dotenv').config()
const express = require('express')
const Telegraf = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

const app = express()

let api = {} // irgendnen object was wir dann auf dem port exposen

app.set('json spaces', 2) // nice formatting of json u know

app.get('/', (req, res) => {
  res.json(api) // response bei / mit dem api object in json format
  console.log(api)
})

app.listen(process.env.PORT || 80) // hier isser port, dann einfach 80, is standard port 4 website zeuch
// HEROKU will sich den port selber holen SAGT DAS INTERNET okay nice

bot.start(ctx => ctx.reply('WeLcOmE'))

bot.on('text', (ctx) => {
  // lets put some stuff in api object

  const msg = ctx.update.message.text
  const chars = msg.split('')
  const newChars = [] // SCHEI? AUF IGNORE ERSTMAKL !!!!!!!!!!!!!!!
  
  api.msg = msg
  api.from = ctx.message.from.username // irgendwie sowat mom chekin docs oskar sagt geht so ned
  api.timestamp = Date.now() // why not :---)
  
  chars.forEach((char, index) => {
    if (index % 2 == 0) {
      newChars.push(char.toUpperCase())
    } else {
      newChars.push(char)
    }
  })

  const newMsg = `${newChars.join('')}`

  ctx.reply(newMsg)
  ctx.replyWithPhoto('https://i.imgur.com/B0qcysc.jpg')
})
 
bot.startPolling()