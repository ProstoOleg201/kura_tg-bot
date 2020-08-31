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
            [{ text: 'Поиск по слову', callback_data: 'data 1' }],
            [{ text: 'Поиск по категориям', callback_data: 'data 2' }],
            [{ text: 'Поиск по району', callback_data: 'data 3' }]
        ]
    })
};

bot.onText(/\/start_test/, function (msg, match) {
    let textBot = 'Привет курьер, выбери один из пунктов для помощи:'
    bot.sendMessage(msg.chat.id, textBot, options);
});

bot.on('callback_query', (query) => {
   const chatId = query.message.chat.id;

   if(query.data === 'data 1'){
       bot.sendMessage(chatId, 'Вибор поиска по слову', {
           reply_markup: {
               inline_keyboard: keyboard
           }
       });
   }

    if(query.data === 'data 2'){
        bot.sendMessage(chatId, 'Вибор поиска по категориям', {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }

    if(query.data === 'data 3'){
        bot.sendMessage(chatId, 'Вибор поиска по району', {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }
});