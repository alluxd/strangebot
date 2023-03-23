const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Pings the bot.'),
async execute(interaction, client) {

    const uptime = process.uptime();
const h = Math.floor(uptime / 3600);
const m = Math.floor((uptime % 3600) / 60);
const s = Math.floor(uptime % 60);

    const pingEmbed = new EmbedBuilder()
    .setTitle("Pong! 🏓")
    .addFields(
        { name: 'Latency 📶', value: `**${client.ws.ping}ms**` },
        { name: 'Uptime ⌚', value: `**${h}h, ${m}m, ${s}s**` }
    )
   await interaction.reply({
    embeds: [
        pingEmbed
    ]
   })
    }
};