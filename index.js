const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1185029109:AAGxJlPbIlj2VxIzNb_KFgT6uhBx1IdNvec'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message',msg => {
 bot.sendMessage(msg.chat.id, `Hello from Me, bot says : "Hi, ${msg.from.first_name}"`)
})