const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Help command'),
async execute(interaction) {
   
  const helpembed = new EmbedBuilder()
    .setcolor("Blurple")
    .settitle('Help Center')
    .setdesciption('Here is all of the commands')
  
    const menu = new ActionRowBuilder()
      .addcomponents(
        new SelctMenuBuilder()
        .selectcustomid('select')
        .setPlaceholder('nothing selected')
        .addoptions(
          {
              label: 'Moderation',
              desciption: "Moderation Commands",
              value: "moderation",
              emoji: "🛠️",
          },
          {
              label: 'Utility',
              description: "Utility Commands",
              value: "utility",
              emoji: "⚙️",
          },
        ),
      );
    await interaction.reply ({ content: "this is the help menu", components: [menu]})  
    await interaction.reply ({ embeds: [helpembed]})
  
    }
};
