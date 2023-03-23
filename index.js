const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

client.commands = new Collection();
//client.config = require("./config.json");

const token = process.env.token
require("dotenv").config()


client
  .login(token)
  .then(() => {
    loadCommands(client);
    loadEvents(client);
  })
  .catch((err) => console.log(err));

  client.on(Events.InteractionCreate, async interaction => (

      if(!interaction.isIsSelectMenu()) return;

      if(interaction.customid === 'select') {
        let choices = "";

        await interaction.values.forEach(async value => {
          choices += '${choices}'
        })
        
        await interaction.reply({ content: '${choices}'})
      }
  ))
 