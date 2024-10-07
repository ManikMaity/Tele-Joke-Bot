require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const botToken = process.env.BOT_TOKEN;


// Created an instance of TelegramBot with use pulling to see new massages
const bot = new TelegramBot(botToken, {polling: true});

bot.on("message", (msg) => {
    const chatText = msg.text;
    bot.sendMessage(msg.chat.id, "Your message: " + chatText);
});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hello, how can I help you?");
})

bot.onText(/\/joke/, async (msg) => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
    const data = await response.json();
    bot.sendMessage(msg.chat.id, data.joke);
})