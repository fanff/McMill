


var mineflayer = require('mineflayer');
var bot = mineflayer.createBot({
  host: "localhost", // optional
  port: 25565,       // optional
  username: "testbot", // email and password are required only for
  version: false                 // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
});
bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  bot.chat(message);
});
bot.on('error', err => console.log(err))
