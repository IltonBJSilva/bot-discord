const { SlashCommandBuilder } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Verifica com 'Pong!'"),

    async execute(intereaction){
        await intereaction.reply("Pong!")
    }

}
