const {Client, ActivityType, EmbedBuilder} = require("discord.js");
const mongoose = require("mongoose")
module.exports = {
  name: "ready",
  once: true,
  /**
   *
   * @param {Client} client
   */
  async execute(client) {
    await mongoose.connect(client.config.mongourl || '', {
      keepAlive: true
    }).then(
      console.log(`🍃 Connected to MongoDB`)
    )
    console.log(`🟦 ${client.user.username} is online!`);
    client.user.setActivity('my development!', { type: ActivityType.Watching });
    
  }, 
};
