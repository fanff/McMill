


require("log-node")();
const log = require('log');

const mineflayer = require('mineflayer');
const navigatePlugin = require('mineflayer-navigate')(mineflayer);
const blockFinderPlugin = require('mineflayer-blockfinder')(mineflayer);

const v = require('vec3');



var bot = mineflayer.createBot({
  host: "localhost", // optional
  port: 25565,       // optional
  username: "testbot", // email and password are required only for
  version: false                 // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
});


//bot root logger
var logger = log.get("testbot");

//logger.error("tststr")
//logger.warning("block update!")
//logger.notice("tststr")
//logger.info("tststr") 
//logger.debug("tststr")


/*
log some local bot info in the console
*/
function logStuffs(bot){


    logger.info("%o HP, level %o, at %O",
                bot.health ,
                bot.experience.level,
                bot.position);

    logger.info("bot at %O",)
    
    block = bot.blockInSight();
    logger.info("looking at %s",block)

    
    if (bot.position!=undefined){
        logger.info("standing on : %s",bot.blockAt(bot.position))
    }

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
    logger.info("health update")
    logStuffs(bot);
});

// regular srv side events
bot.on('time',function(){
    logger.info("time");
});

bot.removeAllListeners("time");

bot.on('time',function(){
    logger.info("time2");
});


//bot.off("time");

//player attack ?
bot.on('entitySwingArm',function(entity){
    logger.info("arming %s",entity)
});

bot.on('diggingCompleted',function(block){
    logger.info("diggingCompleted",block)
});

bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  // echo
  bot.chat(message);
});


bot.on('error', err => logger.error(err))
logger.info("bot %O",bot);

bot.emit("diggingCompleted");

