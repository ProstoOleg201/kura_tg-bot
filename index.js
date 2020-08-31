// Подключаем библиотеку для работы с Telegram API в переменную
let TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот
let token = '1185029109:AAEMIODQ0Cee82UeF81WJ5Ze6vUPgI8cuos';
// Включить опрос сервера. Бот должен обращаться к серверу Telegram, чтобы получать актуальную информацию
// Подробнее: https://core.telegram.org/bots/api#getupdates
let bot = new TelegramBot(token, { polling: true });

// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием, то есть "Hello World!")
bot.on('message', function (msg) {
    let fromId = msg.from.id; // Получаем ID отправителя
    let myText = msg.text; // Получаем текст после /echo
    bot.sendMessage(fromId, myText);
});