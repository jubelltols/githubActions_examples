const TelegramBot = require('node-telegram-bot-api');
const core = require("@actions/core");
const github = require("@actions/github");


// replace the value below with the Telegram token you receive from @BotFather

const token = core.getInput('token');
const id_chat = core.getInput('id_chat');
const nombre = core.getInput('nombre');

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.sendMessage(id_chat, 'Workflow ejecutado correctamente tras el último commit. Saludos '+ nombre);

bot.stopPolling();