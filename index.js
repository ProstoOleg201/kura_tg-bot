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

bot.on('message', function (msg, match){
    whoSendMessage(msg);
});

function whoSendMessage(msg) {
    const {text} = msg
    const {first_name, username} = msg.from

    console.log(first_name + ' (@' + username + ')' + getTimeNow() + text);
}
function getTimeNow() {

    const date = new Date();
    let hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    let min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    let sec = date.getSeconds();
    sec = (min < 10 ? "0" : "") + sec;

    return ' ' + hour + ':' + min + ':' + sec + ' ';
}

bot.on('callback_query', (query) => {

    const {chat, message_id, text} = query.message
    bot.deleteMessage(chat.id, message_id)

    switch (query.data) {
        case 'data 1':
            bot.sendMessage(chat.id,'Вибор поиска по слову')
            break;
        case 'data 2':
            bot.sendMessage(chat.id, 'Вибор поиска по категориям')
            break;
        case 'data 3':
            bot.sendMessage(chat.id, 'Вибор поиска по району')
            break;
    }
});


/*
База данних та поиск в ней
Из чего состоит база даних ???

1. Title: Название заведения. Например Grand Lobster / Гранд Лобстер
2. Tags: Похожие слова, поиск по словам. Например Лобсетр, Гранд, Лоб, Grand, Lobster и т.д.
3. Номер телофона. Например: +380940234214
4. Часи работи. Пн-Пт 12:00-19:00
5.
 */