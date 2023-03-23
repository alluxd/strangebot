const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Help command'),
async execute(interaction) {
   
  const helpembed - new EmbedBuilder()
    .setcolor("Blurple")
    .settitle('Help Center')
    .setdesciption('Here is all of the commands')
  
    await interaction.reply ({ embeds: [helpembed]})
    }
};
