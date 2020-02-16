


require("log-node")();
const log = require('log');

const mineflayer = require('mineflayer');
const navigatePlugin = require('mineflayer-navigate')(mineflayer);
const blockFinderPlugin = require('mineflayer-blockfinder')(mineflayer);


var bot = mineflayer.createBot({
  host: "localhost", // optional
  port: 25565,       // optional
  username: "testbot", // email and password are required only for
  version: false                 // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
});

var logger = log.get("testbot");

logger.error("i block update!")
logger.warning("block update!")
logger.notice("i block update!")
logger.info("i block update!") 
logger.debug("i block update!")



/*
log some local bot info in the console
*/
function logStuffs(bot){


    logger.info("%o HP, level %o",bot.health , bot.experience.level)
    
    block = bot.blockInSight();
    logger.info("looking at %s",block)
    
    //bot.blockAt((0,0,0))

    //logger.info("looking at %s",block)
}





bot.on('blockUpdate',function(oldblock,newblock){

    logger.debug("block update!")
});

bot.on('login',function(){
    logger.info("login")
    logStuffs(bot);
});

bot.on('spawn',function(){
    logger.notice("spawned")
});

bot.on('health',function(){
    logger.info("health")
    logStuffs(bot);
});


bot.on('entitySwingArm',function(entity){
    logger.info("arming %s",entity)
});

bot.on('diggingCompleted',function(block){
    logger.info("diggingCompleted",block)
});

bot.on('chat', function(username, message) {
  if (username === bot.username) return;

  bot.chat(message);


});



bot.on('error', err => logger.error(err))
