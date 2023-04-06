const {
    CommandInteraction,
    EmbedBuilder,
    SlashCommandBuilder,
    PermissionFlagsBits
} = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('randomnumber')
        .setDescription('Get a random number.')
        .setDefaultPermission(true)
        .addNumberOption((option) =>
            option.setName('min-number')
            .setDescription('Minimum amount')
            .setRequired(true)
            .setMinValue(1)
        )
        .addNumberOption((option) =>
            option.setName('max-number')
            .setDescription('Maximum amount')
            .setRequired(true)
            .setMinValue(2)
        ),
    async execute(interaction) {
       const minNum = interaction.options.getNumber("min-number");
       const maxNum = interaction.options.getNumber("max-number");

    const genNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);


       const numberE = new EmbedBuilder()
       .setTitle("Random Number")
       .addFields(
        { name: 'Number', value: `${genNum}`, inline: true },
        { name: 'Minimum', value: `${minNum}`, inline: true },
        { name: 'Maximum', value: `${maxNum}`, inline: true },
        
       )
       await interaction.reply({
            content: `Done!`,
            embeds: [
                 numberE
            ]
        });
    }
};
