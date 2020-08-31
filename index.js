const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1185029109:AAGxJlPbIlj2VxIzNb_KFgT6uhBx1IdNvec'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Получили твое сообщение! Спасибо!');
});