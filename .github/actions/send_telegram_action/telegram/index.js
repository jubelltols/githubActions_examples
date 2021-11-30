const TelegramBot = require('node-telegram-bot-api');
const core = require("@actions/core");
const github = require("@actions/github");


// replace the value below with the Telegram token you receive from @BotFather

const token = core.getInput('token');
const id_chat = core.getInput('id_chat');

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.sendMessage(id_chat, 'Received your message');

/* // Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (id_chat, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = id_chat;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (id_chat) => {
    const chatId = id_chat;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
}); */