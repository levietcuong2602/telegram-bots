const { Telegraf } = require('telegraf');

const { logger } = require('../utils/logger');

function test() {
  const bot = new Telegraf('1402404979:AAGmJPr_rR-dUUXJJpmeX7hlKu9RfVrhX8Y');
  // start command
  bot.start(ctx => {
    ctx.reply('You have entered the start command');
  });
  // help command
  bot.help(ctx => {
    ctx.reply('You have entered the help command');
  });
  // setting command
  bot.settings(ctx => {
    ctx.reply('You have entered the settings command');
  });
  // custom command
  bot.command('test', ctx => ctx.reply('Hello Telegram'));
  // hears
  bot.hears('cuonglv', ctx => {
    ctx.reply('Hello Cuong! Welcome to the telegram tutorial!');
  });
  // register middleware for provider update type
  bot.on(['sticker'], ctx => {
    ctx.reply('This is message stickers');
  });
  // register middleware bot
  bot.use(ctx => {
    logger.info('You register middleware bot!');
    ctx.reply('You used bot!');
  });

  bot.launch();
}

module.exports = {
  test,
};
