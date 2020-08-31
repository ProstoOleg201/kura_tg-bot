// Подключаем библиотеку для работы с Telegram API в переменную
let TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот
let token = '1185029109:AAEMIODQ0Cee82UeF81WJ5Ze6vUPgI8cuos';
// Включить опрос сервера. Бот должен обращаться к серверу Telegram, чтобы получать актуальную информацию
// Подробнее: https://core.telegram.org/bots/api#getupdates
let bot = new TelegramBot(token, { polling: true });

var options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Кнопка 1', callback_data: 'data 1' }],
            [{ text: 'Кнопка 2', callback_data: 'data 2' }],
            [{ text: 'Кнопка 3', callback_data: 'data 3' }]
        ]
    })
};

bot.onText(/\/start_test/, function (msg, match) {
    bot.sendMessage(msg.chat.id, 'Выберите любую кнопку:', options);
});