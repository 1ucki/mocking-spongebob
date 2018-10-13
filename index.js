require('dotenv').config()
const Telegraf = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => ctx.reply('WeLcOmE'))

bot.on('text', (ctx) => {
  const msg = ctx.update.message.text
  const chars = msg.split('')
  const newChars = []

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