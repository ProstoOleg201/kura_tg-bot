const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1185029109:AAGxJlPbIlj2VxIzNb_KFgT6uhBx1IdNvec'

const bot = new TelegramBot(TOKEN, {polling: true})

/* bot.on('message',msg => {
    bot.sendMessage(msg.chat.id, `Hello: "Hi, ${msg.from.first_name}"`)
}
 */

bot.on('text', function (msg)
{
    let messageChatId = msg.chat_id;
    let messageText = msg.text;
    let messageDate = msg.date;
    let messageUsr = msg.from.username;

    sendMessageByBot(messageChatId, messageText, messageDate, messageUsr);

    console.log(msg);
});

function sendMessageByBot (aId, aText, aDate, aName)
{
    let text = 'I\'m a cute bot!';
    bot.sendMessage(aId, aText, aDate, aName);
}